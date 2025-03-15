import type { MetadataRoute } from "next";
import { baseURL, infoPages, authPages } from "@/config/metadata";

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
  const infoPageUrls = Object.values(infoPages)
    .filter((page) => page.path !== "/info")
    .map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  // Halaman auth
  const authPageUrls = Object.values(authPages)
    .filter((page) => page.path !== "/auth")
    .map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.path.includes("forgot-password") ? 0.6 : 0.7,
    }));

  return [...mainPages, ...infoPageUrls, ...authPageUrls];
}
