import type { MetadataRoute } from "next";
import { services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://helumlimited.com";
  const staticRoutes = [
    "",
    "/about",
    "/vision-mission",
    "/values",
    "/services",
    "/why-helum",
    "/solutions",
    "/who-we-serve",
    "/process",
    "/partnerships",
    "/opportunity",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
