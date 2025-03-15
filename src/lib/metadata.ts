import type { Metadata } from "next";
import { baseURL, siteConfig } from "@/config/metadata";

type MetadataProps = {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
};

export function createMetadata({ title, description, path, ogImagePath }: MetadataProps): Metadata {
  const ogImage = ogImagePath
    ? `https://${baseURL}${ogImagePath}`
    : `https://${baseURL}/images/og${path}.png`;

  const twitterImage = ogImagePath
    ? `https://${baseURL}${ogImagePath}`
    : `https://${baseURL}/images/twitter${path}.png`;

  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: {
      template: `%s | ${siteConfig.name}`,
      default: title,
    },
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `https://${baseURL}${path}`,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [twitterImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
