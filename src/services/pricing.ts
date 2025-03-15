import type { PricingPlan, PricingFAQ, Testimonial } from "@/data";
import { pricingPlans, pricingFAQs, testimonials } from "@/data";

export async function getPricingPlans(): Promise<PricingPlan[]> {
  // Saat ini mengambil dari data statis
  // Nanti bisa diubah untuk mengambil dari database
  return pricingPlans;
}

export async function getPricingFAQs(): Promise<PricingFAQ[]> {
  // Saat ini mengambil dari data statis
  // Nanti bisa diubah untuk mengambil dari database
  return pricingFAQs;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  // Saat ini mengambil dari data statis
  // Nanti bisa diubah untuk mengambil dari database
  return testimonials;
}

export async function getPricingPlanByName(name: string): Promise<PricingPlan | undefined> {
  return pricingPlans.find((plan) => plan.name === name);
}
