"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQCategory, FAQItem } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/icon";

// Animasi variants untuk Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
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

// Client component untuk search dan tabs
export default function ClientFAQ({ categories }: { categories: FAQCategory[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("umum");

  // Filter FAQ berdasarkan search query
  const filteredCategories = searchQuery
    ? categories.map((category: FAQCategory) => ({
        ...category,
        items: category.items.filter(
          (item: FAQItem) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      }))
    : categories;

  // Hitung total hasil pencarian
  const totalResults = filteredCategories.reduce(
    (total: number, category: FAQCategory) => total + category.items.length,
    0,
  );

  return (
    <>
      {/* Search Bar */}
      <motion.div
        className="relative mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon
            name="search"
            size={20}
            className="text-muted-foreground"
          />
        </div>
        <input
          type="text"
          className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Cari pertanyaan atau kata kunci..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AnimatePresence>
          {searchQuery && (
            <motion.div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {totalResults} hasil
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tabs dan Accordion */}
      <AnimatePresence mode="wait">
        {searchQuery ? (
          // Tampilkan semua hasil pencarian tanpa tabs jika ada query
          <motion.div
            className="space-y-6"
            key="search-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCategories.map(
              (category: FAQCategory) =>
                category.items.length > 0 && (
                  <motion.div
                    key={category.id}
                    className="space-y-4"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                  >
                    <h2 className="text-xl font-semibold">{category.label}</h2>
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-4"
                      >
                        {category.items.map((item: FAQItem, i: number) => (
                          <motion.div
                            key={`${category.id}-${i}`}
                            variants={fadeIn}
                            custom={i}
                          >
                            <AccordionItem
                              value={`${category.id}-${i}`}
                              className="border rounded-lg px-6 py-2 shadow-sm bg-card"
                            >
                              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                                {item.answer}
                              </AccordionContent>
                            </AccordionItem>
                          </motion.div>
                        ))}
                      </Accordion>
                    </motion.div>
                  </motion.div>
                ),
            )}
            {totalResults === 0 && (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-muted-foreground">
                  Tidak ada hasil yang ditemukan untuk "{searchQuery}"
                </p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          // Custom Tabs Implementation
          <motion.div
            className="w-full"
            key="tabs-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Custom Tabs Navigation */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-muted rounded-lg p-1 max-w-2xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
                  {categories.map((category: FAQCategory, index) => (
                    <motion.button
                      type="button"
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`
                        min-h-[48px] px-3 py-2 rounded-md text-sm font-medium text-center
                        transition-colors duration-200 
                        ${
                          activeTab === category.id
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-muted-foreground/10"
                        }
                      `}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <span className="block leading-tight">{category.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {categories.map(
                (category: FAQCategory) =>
                  activeTab === category.id && (
                    <motion.div
                      key={category.id}
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                      >
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full space-y-4"
                        >
                          {category.items.map((item: FAQItem, i: number) => (
                            <motion.div
                              key={i}
                              variants={fadeIn}
                              custom={i}
                            >
                              <AccordionItem
                                value={`item-${i}`}
                                className="border rounded-lg px-6 py-2 shadow-sm bg-card hover:bg-card/80 transition-colors"
                              >
                                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                                  {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                                  {item.answer}
                                </AccordionContent>
                              </AccordionItem>
                            </motion.div>
                          ))}
                        </Accordion>
                      </motion.div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="mt-16 rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4">Masih Punya Pertanyaan?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi kami.
        </p>
        <motion.a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hubungi Kami
        </motion.a>
      </motion.div>
    </>
  );
}
