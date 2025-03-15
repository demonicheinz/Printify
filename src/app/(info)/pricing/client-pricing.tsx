"use client";

import { Icon } from "@/components/ui/icon";
import type { PricingPlan, PricingFAQ, Testimonial } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy load components
const InfiniteMovingCards = dynamic(
  () => import("@/components/ui/infinite-moving-cards").then((mod) => mod.InfiniteMovingCards),
  {
    loading: () => (
      <div className="w-full py-8 flex items-center justify-center">
        <p className="text-muted-foreground">Memuat testimonial...</p>
      </div>
    ),
    ssr: true,
  },
);

const FAQSection = dynamic(() => import("@/components/sections/faq-section"), {
  loading: () => (
    <div className="bg-card animate-pulse p-4">
      <div className="h-6 bg-muted rounded mb-4 w-3/4" />
      <div className="h-4 bg-muted rounded mb-2 w-full" />
      <div className="h-4 bg-muted rounded mb-2 w-5/6" />
      <div className="h-4 bg-muted rounded w-4/6" />
    </div>
  ),
});

// Animasi variants untuk Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ClientPricing({
  pricingPlans,
  pricingFAQs,
  testimonials,
}: {
  pricingPlans: PricingPlan[];
  pricingFAQs: PricingFAQ[];
  testimonials: Testimonial[];
}) {
  return (
    <>
      {/* Pricing Plans */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={i}
            className={`bg-card rounded-lg p-8 border ${
              plan.popular ? "border-primary shadow-lg relative" : "border-border"
            }`}
            variants={fadeIn}
            whileHover={{
              y: -8,
              boxShadow:
                "0 20px 30px -10px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] },
            }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
          >
            {plan.popular && (
              <motion.div
                className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                Paling Populer
              </motion.div>
            )}

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <motion.ul
              className="space-y-3 mb-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {plan.features.map((feature, j) => (
                <motion.li
                  key={j}
                  className="flex items-start"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.1 + j * 0.05, duration: 0.3 },
                    },
                  }}
                >
                  <Icon
                    name="check"
                    size={20}
                    className="text-primary shrink-0 mr-3"
                  />
                  <span className="text-sm">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href={plan.ctaLink}
              className={`w-full inline-flex justify-center items-center rounded-md text-sm font-medium h-10 px-4 py-2 ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.15, ease: [0.25, 0.1, 0.25, 1.0] },
              }}
              whileTap={{
                scale: 0.97,
                transition: { duration: 0.05 },
              }}
              transition={{
                duration: 0.1,
                ease: "easeOut",
              }}
            >
              {plan.cta}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="mt-20 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Apa Kata Pelanggan Kami</h2>

        <div className="overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="py-4"
          />
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Pertanyaan Umum tentang Harga</h2>
          <Link
            href="/faq"
            className="text-primary flex items-center hover:underline text-sm font-medium"
          >
            Lihat semua FAQ{" "}
            <Icon
              name="chevronRight"
              size={16}
              className="ml-1"
            />
          </Link>
        </div>

        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <FAQSection faqs={pricingFAQs} />
        </div>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Perbandingan Paket</h2>

        <div className="overflow-x-auto">
          <div className="min-w-full rounded-lg border shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted dark:bg-secondary/80">
                  <th className="p-3 md:p-4 text-left text-xs sm:text-sm md:text-base font-medium">
                    Fitur
                  </th>
                  {pricingPlans.map((plan, i) => (
                    <th
                      key={i}
                      className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base font-medium"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t even:bg-muted/50">
                  <td className="p-3 md:p-4 font-medium text-xs sm:text-sm md:text-base">
                    Jumlah Foto
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    10 foto
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    50 foto
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    Tidak terbatas
                  </td>
                </tr>
                <tr className="border-t odd:bg-muted/50">
                  <td className="p-3 md:p-4 font-medium text-xs sm:text-sm md:text-base">
                    Layout Fleksibel
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    <Icon
                      name="check"
                      size={18}
                      className="text-primary mx-auto"
                    />
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    <Icon
                      name="check"
                      size={18}
                      className="text-primary mx-auto"
                    />
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    <Icon
                      name="check"
                      size={18}
                      className="text-primary mx-auto"
                    />
                  </td>
                </tr>
                <tr className="border-t even:bg-muted/50">
                  <td className="p-3 md:p-4 font-medium text-xs sm:text-sm md:text-base">
                    Penyimpanan
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    1 bulan
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    2 bulan
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    3 bulan
                  </td>
                </tr>
                <tr className="border-t odd:bg-muted/50">
                  <td className="p-3 md:p-4 font-medium text-xs sm:text-sm md:text-base">
                    Dukungan Prioritas
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">-</td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    <Icon
                      name="check"
                      size={18}
                      className="text-primary mx-auto"
                    />
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    <Icon
                      name="check"
                      size={18}
                      className="text-primary mx-auto"
                    />
                  </td>
                </tr>
                <tr className="border-t even:bg-muted/50">
                  <td className="p-3 md:p-4 font-medium text-xs sm:text-sm md:text-base">
                    Konsultasi Desain
                  </td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">-</td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">-</td>
                  <td className="p-3 md:p-4 text-center text-xs sm:text-sm md:text-base">
                    <Icon
                      name="check"
                      size={18}
                      className="text-primary mx-auto"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4">Butuh Paket Khusus?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Kami dapat menyesuaikan layanan dengan kebutuhan spesifik institusi Anda.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
          >
            Hubungi Kami
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}
