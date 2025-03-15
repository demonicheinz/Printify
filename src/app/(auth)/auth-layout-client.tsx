"use client";

import { memo } from "react";
import type React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";

interface AuthLayoutClientProps {
  children: React.ReactNode;
}

const AuthLayoutClient = memo(function AuthLayoutClient({ children }: AuthLayoutClientProps) {
  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />
      <main className="flex-1 pt-16">
        <motion.div
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          transition={pageTransition.transition}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
});

AuthLayoutClient.displayName = "AuthLayoutClient";

export default AuthLayoutClient;
