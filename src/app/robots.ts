import { baseURL } from "@/config/metadata";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/admin"],
      },
    ],
    sitemap: `https://${baseURL}/sitemap.xml`,
    host: `https://${baseURL}`,
  };
}
