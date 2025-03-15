import type { Metadata } from "next";
import InfoLayoutClient from "./info-layout-client";
import { siteConfig } from "@/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: "%s | Printify",
      default: "Printify - Solusi Cetak Foto dan Dokumen",
    },
    description:
      "Printify adalah platform cetak digital yang dirancang khusus untuk memenuhi kebutuhan cetak foto dan dokumen bagi siswa, santri, dan institusi pendidikan.",
    openGraph: {
      title: "Printify - Solusi Cetak Foto dan Dokumen",
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Printify - Solusi Cetak Foto dan Dokumen",
      description: siteConfig.description,
      images: [siteConfig.ogImage],
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

export default function InfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <InfoLayoutClient>{children}</InfoLayoutClient>;
}
