/**
 * HTML → Next.js page conversion.
 * Run: node scripts/convert-html.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const HREF_MAP = {
  "homepage.html": "/",
  "about.html": "/about",
  "what-we-do.html": "/what-we-do",
  "residential.html": "/residential",
  "commercial.html": "/commercial",
  "blog.html": "/blog",
  "blog-crew-tenure.html": "/blog/crew-tenure",
  "blog-laser-screed.html": "/blog/laser-screed",
  "blog-midwest-foundations.html": "/blog/midwest-foundations",
  "gallery.html": "/gallery",
  "contact.html": "/contact",
  "tech-showcase.html": "/tech-showcase",
};

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
  console.log("wrote", path.relative(ROOT, file));
}

function mapHref(href) {
  if (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#") ||
    href.startsWith("/")
  ) {
    return href;
  }
  const [file, hash] = href.split("#");
  if (Object.prototype.hasOwnProperty.call(HREF_MAP, file)) {
    const base = HREF_MAP[file];
    if (!hash) return base;
    return base === "/" ? `/#${hash}` : `${base}#${hash}`;
  }
  return href;
}

function extractBetween(html, startTag, endTag) {
  const start = html.search(new RegExp(startTag, "i"));
  if (start === -1) throw new Error(`Missing ${startTag}`);
  const openEnd = html.indexOf(">", start) + 1;
  const end = html.search(new RegExp(endTag, "i"));
  if (end === -1) throw new Error(`Missing ${endTag}`);
  return html.slice(openEnd, end).trim();
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1].trim() : "Reedy Concrete";
}

function extractDescription(html) {
  const m = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  return m ? m[1] : "";
}

function removeMatchingDiv(html, startIndex) {
  let depth = 0;
  let i = startIndex;
  while (i < html.length) {
    if (html.startsWith("<div", i)) {
      depth++;
      i = html.indexOf(">", i) + 1;
      continue;
    }
    if (html.startsWith("</div>", i)) {
      depth--;
      i += 6;
      if (depth === 0) return { before: html.slice(0, startIndex), after: html.slice(i) };
      continue;
    }
    i++;
  }
  throw new Error("Unbalanced div");
}

function htmlToJsx(mainHtml, { contactForm = false, gallery = false, home = false } = {}) {
  let s = mainHtml;
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  if (home) {
    // Wrap about-stats
    const statsStart = s.indexOf('<div class="about-stats" id="about-stats">');
    if (statsStart !== -1) {
      const { before, after } = removeMatchingDiv(s, statsStart);
      const innerStart = s.indexOf(">", statsStart) + 1;
      const innerEnd = s.length - after.length - 6; // before closing </div>
      // recalculate properly
      let depth = 0;
      let i = statsStart;
      let closeStart = -1;
      while (i < s.length) {
        if (s.startsWith("<div", i)) {
          depth++;
          i = s.indexOf(">", i) + 1;
          continue;
        }
        if (s.startsWith("</div>", i)) {
          depth--;
          if (depth === 0) {
            closeStart = i;
            break;
          }
          i += 6;
          continue;
        }
        i++;
      }
      const openEnd = s.indexOf(">", statsStart) + 1;
      const inner = s.slice(openEnd, closeStart);
      s = s.slice(0, statsStart) + `<HomeStats>${inner}</HomeStats>` + s.slice(closeStart + 6);
    }

    // Replace lightbox with component
    const lb = s.indexOf('<div class="home-lightbox"');
    if (lb !== -1) {
      const { before, after } = removeMatchingDiv(s, lb);
      s = before + "<HomeLightbox />" + after;
    }
  }

  if (gallery) {
    s = s.replace(
      /<div id="gallery-filters" class="gallery-filters" role="group" aria-label="Filter gallery by category"><\/div>\s*<div id="gallery-grid" class="gallery-grid"><\/div>/,
      "<GalleryGrid />"
    );
  }

  if (contactForm) {
    s = s.replace(
      /<form class="([^"]*)" action="#" method="post" onsubmit="return handleSubmit\(event\)">/g,
      '<ContactForm className="$1" action="#" method="post">'
    );
    // If ContactForm opened, close with ContactForm
    if (s.includes("<ContactForm")) {
      // Replace the matching </form> for contact forms only — first form in main
      s = s.replace(/<\/form>/, "</ContactForm>");
    }
  }

  // href mapping
  s = s.replace(/\bhref="([^"]+)"/g, (_, href) => `href="${mapHref(href)}"`);

  // asset paths
  s = s.replace(/\b(src|data-full|poster)="(assets\/[^"]+)"/g, (_, attr, p) => `${attr}="/${p}"`);

  // class / for / JSX attribute casing
  s = s.replace(/\bclass="/g, 'className="');
  s = s.replace(/\bfor="/g, 'htmlFor="');
  s = s.replace(/\bdatetime=/g, "dateTime=");
  s = s.replace(/\btabindex=/g, "tabIndex=");
  s = s.replace(/\bautocomplete=/g, "autoComplete=");

  // style="..." → style={{ ... }}
  s = s.replace(/style="([^"]*)"/g, (_, css) => {
    const parts = css
      .split(";")
      .map((d) => d.trim())
      .filter(Boolean)
      .map((d) => {
        const i = d.indexOf(":");
        const prop = d.slice(0, i).trim();
        const val = d.slice(i + 1).trim();
        const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        return `${camel}: ${JSON.stringify(val)}`;
      });
    return `style={{ ${parts.join(", ")} }}`;
  });

  // remove leftover onsubmit
  s = s.replace(/\s+onsubmit="[^"]*"/gi, "");

  // void tags
  const voids = ["img", "br", "hr", "input", "meta", "link", "source", "area", "col", "embed", "wbr"];
  for (const tag of voids) {
    s = s.replace(new RegExp(`<(${tag})(\\s[^>]*?)(?<!/)\\s*>`, "gi"), (m, t, attrs) => {
      if (/\/>\s*$/.test(m.trim())) return m;
      return `<${t}${attrs} />`;
    });
  }

  // Internal links → Link (not tel/mailto/http, not target=_blank)
  s = s.replace(/<a(\s[^>]*?)href="(\/[^"]*)"([^>]*)>/g, (m, before, href, after) => {
    if (/target=/.test(before + after)) return m;
    return `<Link${before}href="${href}"${after}>`;
  });
  // Close tags: convert </a> to </Link> only for ones we opened — approximate by counting
  // Safer approach: replace all </a> that follow Link opens using a stack
  {
    const parts = [];
    const stack = [];
    const re = /<Link\b[^>]*>|<\/a>|<a\b[^>]*>/g;
    let last = 0;
    let match;
    while ((match = re.exec(s))) {
      parts.push(s.slice(last, match.index));
      const token = match[0];
      if (token.startsWith("<Link")) {
        parts.push(token);
        stack.push("Link");
      } else if (token.startsWith("<a")) {
        parts.push(token);
        stack.push("a");
      } else {
        const top = stack.pop();
        parts.push(top === "Link" ? "</Link>" : "</a>");
      }
      last = match.index + token.length;
    }
    parts.push(s.slice(last));
    s = parts.join("");
  }

  // Fix HomeStats className if any leftover class=
  s = s.replace(/\bclass="/g, 'className="');

  // data attributes with empty values fine
  // Convert boolean-ish attributes that appear as hidden without value - rare in main

  return s.trim();
}

function indent(text, n) {
  const pad = " ".repeat(n);
  return text
    .split("\n")
    .map((line) => (line.length ? pad + line : line))
    .join("\n");
}

function mergeCss() {
  const siteCss = fs.readFileSync(path.join(ROOT, "assets/css/site.css"), "utf8");
  const homepage = fs.readFileSync(path.join(ROOT, "homepage.html"), "utf8");
  const styleMatch = homepage.match(/<style>([\s\S]*?)<\/style>/i);
  if (!styleMatch) throw new Error("No homepage style");
  let homeCss = styleMatch[1];

  homeCss = homeCss.replace(
    /--cement:\s*url\(["']?assets\/textures\/cement-terrazzo\.jpg["']?\)/,
    '--cement: url("/assets/textures/cement-terrazzo.jpg")'
  );
  homeCss = homeCss.replace(/url\(["']?assets\//g, 'url("/assets/');

  let site = siteCss.replace(
    /--cement:\s*url\(["']?\.\.\/textures\/cement-terrazzo\.jpg["']?\)/,
    '--cement: url("/assets/textures/cement-terrazzo.jpg")'
  );
  site = site.replace(/url\(["']?\.\.\/([^"')]+)["']?\)/g, 'url("/assets/$1")');

  return `/* Reedy Concrete — merged site.css + homepage styles.
 * site.css first (interior), homepage second (wins on shared selectors).
 */

${site}

/* ===== Homepage advanced styles (override) ===== */
${homeCss}
`;
}

const PAGES = [
  { file: "homepage.html", out: "app/page.tsx", home: true },
  { file: "about.html", out: "app/about/page.tsx" },
  { file: "what-we-do.html", out: "app/what-we-do/page.tsx" },
  { file: "residential.html", out: "app/residential/page.tsx", contactForm: true },
  { file: "commercial.html", out: "app/commercial/page.tsx", contactForm: true },
  { file: "blog.html", out: "app/blog/page.tsx" },
  { file: "blog-crew-tenure.html", out: "app/blog/crew-tenure/page.tsx" },
  { file: "blog-laser-screed.html", out: "app/blog/laser-screed/page.tsx" },
  { file: "blog-midwest-foundations.html", out: "app/blog/midwest-foundations/page.tsx" },
  { file: "gallery.html", out: "app/gallery/page.tsx", gallery: true },
  { file: "contact.html", out: "app/contact/page.tsx", contactForm: true },
  { file: "tech-showcase.html", out: "app/tech-showcase/page.tsx" },
];

write(path.join(ROOT, "app/globals.css"), mergeCss());

for (const page of PAGES) {
  const html = fs.readFileSync(path.join(ROOT, page.file), "utf8");
  const title = extractTitle(html);
  const description = extractDescription(html);
  const main = extractBetween(html, "<main", "</main>");
  const jsx = htmlToJsx(main, page);

  const imports = [
    'import type { Metadata } from "next";',
    'import Link from "next/link";',
  ];
  if (page.home) {
    imports.push('import HomeLightbox from "@/components/HomeLightbox";');
    imports.push('import HomeStats from "@/components/HomeStats";');
  }
  if (page.gallery) imports.push('import GalleryGrid from "@/components/GalleryGrid";');
  if (page.contactForm && jsx.includes("ContactForm")) {
    imports.push('import ContactForm from "@/components/ContactForm";');
  }

  // Drop unused Link if somehow none — keep anyway, pages use links
  const content = `${imports.join("\n")}

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default function Page() {
  return (
    <main>
${indent(jsx, 6)}
    </main>
  );
}
`;

  write(path.join(ROOT, page.out), content);
}

console.log("Conversion complete.");
