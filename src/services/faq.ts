import type { FAQCategory } from "@/data";
import { faqData } from "@/data";

export async function getFAQCategories(): Promise<FAQCategory[]> {
  // Saat ini mengambil dari data statis
  // Nanti bisa diubah untuk mengambil dari database
  return faqData;
}

export async function getFAQCategoryById(id: string): Promise<FAQCategory | undefined> {
  return faqData.find((category) => category.id === id);
}
