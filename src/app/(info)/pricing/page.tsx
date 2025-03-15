import type { Metadata } from "next";
import type { PricingPlan, PricingFAQ, Testimonial } from "@/data";
import { getPricingPlans, getPricingFAQs, getTestimonials } from "@/services";
import { Header } from "@/components/layout/header";
import ClientPricing from "./client-pricing";
import { createMetadata } from "@/lib/metadata";
import { infoPages } from "@/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, path } = infoPages.pricing;
  return createMetadata({ title, description, path });
}

export default async function PricingPage() {
  const pricingPlans: PricingPlan[] = await getPricingPlans();
  const pricingFAQs: PricingFAQ[] = await getPricingFAQs();
  const testimonials: Testimonial[] = await getTestimonials();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Header
        title="Harga Layanan"
        description="Pilih paket yang sesuai dengan kebutuhan cetak Anda"
      />

      <ClientPricing
        pricingPlans={pricingPlans}
        pricingFAQs={pricingFAQs}
        testimonials={testimonials}
      />
    </div>
  );
}
