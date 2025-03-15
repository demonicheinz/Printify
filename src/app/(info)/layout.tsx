import type { Metadata } from "next";
import InfoLayoutClient from "./info-layout-client";
import { infoPages } from "@/config/metadata";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, path } = infoPages.info;
  return createMetadata({ title, description, path });
}

export default function InfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <InfoLayoutClient>{children}</InfoLayoutClient>;
}
