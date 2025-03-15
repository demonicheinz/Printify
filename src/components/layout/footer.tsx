"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export default function Footer() {
  const [year, setYear] = useState("2025");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-muted py-6 mt-auto border-t border-border dark:border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright - Left */}
          <div className="order-3 md:order-1 mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">© {year} Printify. All rights reserved.</p>
          </div>

          {/* Made With Love - Center */}
          <div className="order-2 md:order-3">
            <div className="text-sm text-muted-foreground flex items-center">
              Made with
              <Icon
                name="heart"
                size={16}
                className="text-red-500 mx-1 fill-red-500 hover:text-red-600"
              />
              by Heinz
            </div>
          </div>

          {/* Links - Right */}
          <div className="order-1 md:order-2 flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 mb-4 md:mb-0">
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Syarat dan Ketentuan
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
