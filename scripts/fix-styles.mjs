import fs from "fs";
import path from "path";

function cssToObjectLiteral(css) {
  const decls = css
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean);
  const parts = decls.map((d) => {
    const i = d.indexOf(":");
    const prop = d.slice(0, i).trim();
    const val = d.slice(i + 1).trim();
    const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const needsQuote = /[^0-9.-]/.test(val) || val === "";
    // keep as string always for safety
    return `${camel}: ${JSON.stringify(val)}`;
  });
  return `{{ ${parts.join(", ")} }}`;
}

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (p.endsWith(".tsx")) {
      let c = fs.readFileSync(p, "utf8");
      const n = c.replace(/style="([^"]*)"/g, (_, css) => `style=${cssToObjectLiteral(css)}`);
      if (n !== c) {
        fs.writeFileSync(p, n);
        console.log("fixed styles", p);
      }
    }
  }
}

walk("app");
