import type { ContactInfo, ContactFAQ } from "@/data";
import { contactInfo, contactFAQs } from "@/data";

export async function getContactInfo(): Promise<ContactInfo> {
  // Saat ini mengambil dari data statis
  // Nanti bisa diubah untuk mengambil dari database
  return contactInfo;
}

export async function getContactFAQs(): Promise<ContactFAQ[]> {
  // Saat ini mengambil dari data statis
  // Nanti bisa diubah untuk mengambil dari database
  return contactFAQs;
}
