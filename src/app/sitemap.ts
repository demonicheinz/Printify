import type { MetadataRoute } from "next";
import { baseURL, infoPages } from "@/config/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${baseURL}`;

  // Halaman utama
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
  ];

  // Halaman info
  const infoPageUrls = Object.values(infoPages).map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainPages, ...infoPageUrls];
}
