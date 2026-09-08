import type { MetadataRoute } from "next";
import { allRoutes } from "@/lib/nav";
import { allProducts, productCategories } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://helumlimited.com";
  const productPaths = [
    ...productCategories.map((c) => `/products/${c.slug}`),
    ...allProducts.map((p) => `/products/${p.category}/${p.slug}`),
  ];
  const paths = [...new Set([...allRoutes, ...productPaths])];
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
