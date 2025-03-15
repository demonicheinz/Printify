import type { Metadata } from "next";
import AuthLayoutClient from "./auth-layout-client";
import { authPages } from "@/config/metadata";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, path } = authPages.auth;
  return createMetadata({ title, description, path });
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayoutClient>{children}</AuthLayoutClient>;
}
