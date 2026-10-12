import type { MetadataRoute } from "next";
import { absoluteUrl, indexablePages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return indexablePages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: page.path === "/" ? 1 : page.path.startsWith("/blog/") ? 0.6 : page.crumbs ? 0.8 : 0.5,
  }));
}
