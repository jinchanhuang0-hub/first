import type { MetadataRoute } from "next";
import { products, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/custom-process",
    "/applications",
    "/factory",
    "/about",
    "/blog",
    "/download",
    "/contact"
  ];
  const productRoutes = products.map((product) => `/products/${product.slug}`);
  const landingRoutes = [
    "/landing/custom-lapel-pins",
    "/landing/challenge-coins",
    "/landing/custom-medals",
    "/landing/custom-metal-keychains"
  ];
  return [...staticRoutes, ...productRoutes, ...landingRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("blog") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("landing") ? 0.8 : 0.7
  }));
}
