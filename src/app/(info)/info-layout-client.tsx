"use client";

import type React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Breadcrumb from "@/components/layout/breadcrumb";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";

interface InfoLayoutClientProps {
  children: React.ReactNode;
}

export default function InfoLayoutClient({ children }: InfoLayoutClientProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb className="mb-4" />
        </div>
        <motion.div
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          transition={pageTransition.transition}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
