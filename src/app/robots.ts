import { baseURL } from "@/config/metadata";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/sign-in",
          "/sign-up",
          "/forgot-password",
          "/about",
          "/pricing",
          "/contact",
          "/faq",
        ],
        disallow: ["/dashboard", "/admin", "/api"],
      },
    ],
    sitemap: `https://${baseURL}/sitemap.xml`,
    host: `https://${baseURL}`,
  };
}
