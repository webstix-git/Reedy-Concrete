import type { Metadata } from "next";
import { company } from "@/lib/company";

export const siteUrl = "https://www.reedyconcrete.com";

export type SitePage = {
  path: string;
  title: string;
  description: string;
  index?: boolean;
  crumbs?: { name: string; path: string }[];
  kind?: "page" | "contact" | "about" | "blog" | "article";
  datePublished?: string;
  image?: string;
};

const home = "Home";

export const sitePages = {
  home: {
    path: "/",
    title: "Reedy Concrete | Concrete Construction in WI, MN & IA",
    description:
      "For more than 50 years, Reedy Concrete has built commercial, industrial, agricultural, and residential concrete across Wisconsin, Minnesota, and Iowa.",
    kind: "page",
    image: "/assets/photos/aerial-foundation.jpg",
  },
  about: {
    path: "/about-us",
    title: "About Reedy Concrete | Over 50 Years of Concrete Experience",
    description:
      "Reedy Concrete Construction, Inc. is a family-owned contractor with more than 50 years of experience in foundations, footings, and flatwork across Wisconsin, Minnesota, and Iowa.",
    kind: "about",
    crumbs: [
      { name: home, path: "/" },
      { name: "About Us", path: "/about-us" },
    ],
    image: "/assets/photos/about-banner.jpg",
  },
  services: {
    path: "/services",
    title: "Concrete Services | Reedy Concrete",
    description:
      "Foundations, footings, and precise flatwork for commercial, industrial, warehouse, agricultural, multi-tenant, and underground parking projects across Wisconsin, Minnesota, and Iowa.",
    crumbs: [
      { name: home, path: "/" },
      { name: "Services", path: "/services" },
    ],
    image: "/assets/photos/commercial.jpg",
  },
  careers: {
    path: "/careers",
    title: "Careers | Reedy Concrete",
    description:
      "Apply to join Reedy Concrete Construction, Inc. Family-owned crews in Galesville, Wisconsin build foundations and flatwork across Wisconsin, Minnesota, and Iowa.",
    crumbs: [
      { name: home, path: "/" },
      { name: "Careers", path: "/careers" },
    ],
    image: "/assets/photos/about.jpg",
  },
  contact: {
    path: "/contact-us",
    title: "Contact Us | Reedy Concrete",
    description:
      "Contact Reedy Concrete about commercial, industrial, agricultural, or residential concrete across Wisconsin, Minnesota, and Iowa.",
    kind: "contact",
    crumbs: [
      { name: home, path: "/" },
      { name: "Contact Us", path: "/contact-us" },
    ],
    image: "/assets/photos/contact-banner.jpg",
  },
  blog: {
    path: "/blog",
    title: "Blog | Reedy Concrete",
    description:
      "Field notes from Reedy Concrete on foundations, laser screed flatwork, and family-owned crews serving Wisconsin, Minnesota, and Iowa.",
    kind: "blog",
    crumbs: [
      { name: home, path: "/" },
      { name: "Blog", path: "/blog" },
    ],
    image: "/assets/photos/blog-laser-screed.jpg",
  },
  laserScreed: {
    path: "/blog/laser-screed",
    title: "Why Laser Screed Floors Support Commercial and Industrial Precision | Reedy Concrete Blog",
    description:
      "How Somero Laser Screeds and Trimble Robotic Stations help Reedy Concrete deliver precise flatwork on commercial, industrial, and warehouse projects.",
    kind: "article",
    datePublished: "2026-03-12",
    image: "/assets/photos/blog-laser-screed.jpg",
    crumbs: [
      { name: home, path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Laser Screed Floors", path: "/blog/laser-screed" },
    ],
  },
  midwestFoundations: {
    path: "/blog/midwest-foundations",
    title: "What Midwest Clients Should Expect From a Foundation Pour | Reedy Concrete Blog",
    description:
      "What clients should expect from a foundation pour: careful layout, experienced crews, and dependable results from Reedy Concrete.",
    kind: "article",
    datePublished: "2026-02-18",
    image: "/assets/photos/blog-midwest-foundations.jpg",
    crumbs: [
      { name: home, path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Midwest Foundations", path: "/blog/midwest-foundations" },
    ],
  },
  crewTenure: {
    path: "/blog/crew-tenure",
    title: "Why Long-Term Crews Change the Pour | Reedy Concrete Blog",
    description:
      "Why long-term crews change the pour at family-owned Reedy Concrete in Galesville, Wisconsin.",
    kind: "article",
    datePublished: "2026-01-22",
    image: "/assets/photos/blog-crew-tenure.jpg",
    crumbs: [
      { name: home, path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Crew Tenure", path: "/blog/crew-tenure" },
    ],
  },
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy | Reedy Concrete",
    description: "Privacy policy for Reedy Concrete website visitors and inquiry contacts.",
    crumbs: [
      { name: home, path: "/" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
  aiPolicy: {
    path: "/ai-policy",
    title: "AI Policy | Reedy Concrete",
    description: "How Reedy Concrete approaches AI-assisted content and website development.",
    crumbs: [
      { name: home, path: "/" },
      { name: "AI Policy", path: "/ai-policy" },
    ],
  },
  siteMap: {
    path: "/site-map",
    title: "Site Map | Reedy Concrete",
    description: "Site map for Reedy Concrete pages, services, and policies.",
    crumbs: [
      { name: home, path: "/" },
      { name: "Site Map", path: "/site-map" },
    ],
  },
  serviceIndex: {
    path: "/service-index",
    title: "Service Index | Reedy Concrete",
    description:
      "Index of Reedy Concrete commercial, industrial, warehouse, agricultural, multi-tenant, and underground parking concrete services.",
    crumbs: [
      { name: home, path: "/" },
      { name: "Service Index", path: "/service-index" },
    ],
  },
  thankYou: {
    path: "/thank-you",
    title: "Thank You | Reedy Concrete",
    description:
      "Thank you for contacting Reedy Concrete. We received your message and will follow up shortly.",
    index: false,
    crumbs: [
      { name: home, path: "/" },
      { name: "Thank You", path: "/thank-you" },
    ],
  },
  careerThankYou: {
    path: "/careers/thank-you",
    title: "Application Received | Reedy Concrete Careers",
    description:
      "Thank you for applying to Reedy Concrete. We received your application and will follow up by phone or email.",
    index: false,
    crumbs: [
      { name: home, path: "/" },
      { name: "Careers", path: "/careers" },
      { name: "Thank You", path: "/careers/thank-you" },
    ],
    image: "/assets/photos/reedy-pump-boom.jpg",
  },
} as const satisfies Record<string, SitePage>;

export const indexablePages: SitePage[] = (Object.values(sitePages) as SitePage[]).filter(
  (page) => page.index !== false,
);

export function absoluteUrl(path: string) {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path}`;
}

export function pageMetadata(page: SitePage): Metadata {
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(page.image ?? "/assets/reedy-logo.png");
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    robots: page.index === false ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: company.name,
      type: page.kind === "article" ? "article" : "website",
      locale: "en_US",
      images: [{ url: image, alt: page.title }],
    },
  };
}

export function businessGraph() {
  const id = `${siteUrl}/#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": id,
        name: company.legalName,
        url: siteUrl,
        telephone: company.phoneTel,
        email: company.emails[0],
        image: absoluteUrl("/assets/reedy-logo.png"),
        logo: absoluteUrl("/assets/reedy-logo.png"),
        address: {
          "@type": "PostalAddress",
          streetAddress: "16451 South 15th St.",
          addressLocality: "Galesville",
          addressRegion: "WI",
          postalCode: "54630",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.0768332,
          longitude: -91.371364,
        },
        areaServed: company.serviceArea.map((name) => ({ "@type": "State", name })),
        sameAs: [company.facebookUrl],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Concrete services",
          itemListElement: [
            "Foundations and Flatwork",
            "Commercial Concrete",
            "Industrial and Warehouse Concrete",
            "Agricultural Concrete",
            "Multi-Tenant Concrete",
            "Underground Parking Concrete",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: company.name,
        publisher: { "@id": id },
      },
    ],
  };
}

export function pageGraph(page: SitePage) {
  const url = absoluteUrl(page.path);
  const pageType =
    page.kind === "article"
      ? "BlogPosting"
      : page.kind === "contact"
        ? "ContactPage"
        : page.kind === "about"
          ? "AboutPage"
          : page.kind === "blog"
            ? "CollectionPage"
            : "WebPage";

  const node: Record<string, unknown> = {
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` },
    publisher: { "@id": `${siteUrl}/#business` },
  };

  if (page.image) node.image = absoluteUrl(page.image);
  if (page.kind === "article") {
    node.headline = page.title.replace(/ \| Reedy Concrete Blog$/, "");
    node.datePublished = page.datePublished;
    node.author = { "@id": `${siteUrl}/#business` };
    node.mainEntityOfPage = url;
  }

  const graph: Record<string, unknown>[] = [node];
  if (page.crumbs && page.crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: page.crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
