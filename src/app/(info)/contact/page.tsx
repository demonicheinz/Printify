import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import ClientContact from "./client-contact";
import { getContactInfo, getContactFAQs } from "@/services";
import type { ContactInfo, ContactFAQ } from "@/data";
import { createMetadata } from "@/lib/metadata";
import { infoPages } from "@/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, path } = infoPages.contact;
  return createMetadata({ title, description, path });
}

export default async function ContactPage() {
  const contactInfo: ContactInfo = await getContactInfo();
  const contactFAQs: ContactFAQ[] = await getContactFAQs();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Header
        title="Hubungi Kami"
        description="Kami siap membantu Anda dengan pertanyaan atau kebutuhan cetak"
      />

      <ClientContact
        contactInfo={contactInfo}
        contactFAQs={contactFAQs}
      />
    </div>
  );
}
