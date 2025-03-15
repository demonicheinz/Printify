import type { Metadata } from "next";
import type { FAQCategory } from "@/data";
import { getFAQCategories } from "@/services";
import { Header } from "@/components/layout/header";
import ClientFAQ from "./client-faq";
import { createMetadata } from "@/lib/metadata";
import { infoPages } from "@/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, path } = infoPages.faq;
  return createMetadata({ title, description, path });
}

// Komponen utama halaman FAQ (Server Component)
export default async function FAQPage() {
  const faqCategories: FAQCategory[] = await getFAQCategories();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Header
        title="Pertanyaan yang Sering Diajukan"
        description="Temukan jawaban untuk pertanyaan umum tentang layanan Printify"
      />

      <ClientFAQ categories={faqCategories} />
    </div>
  );
}
