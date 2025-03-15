"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 10);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
        >
          <img
            src="/images/logo.svg"
            alt="Printify Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Harga
          </Link>
          <Link href="/sign-up">
            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer"
            >
              Daftar
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button
              size="sm"
              className="cursor-pointer"
            >
              Masuk
            </Button>
          </Link>

          {/* Theme Toggle - Desktop */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full cursor-pointer flex items-center justify-center w-10 h-10"
            aria-label="Toggle theme"
          >
            {mounted &&
              (theme === "dark" ? (
                <Icon
                  name="sun"
                  size={20}
                />
              ) : (
                <Icon
                  name="moon"
                  size={20}
                />
              ))}
          </Button>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle - Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full flex items-center justify-center w-10 h-10"
            aria-label="Toggle theme"
          >
            {mounted &&
              (theme === "dark" ? (
                <Icon
                  name="sun"
                  size={20}
                />
              ) : (
                <Icon
                  name="moon"
                  size={20}
                />
              ))}
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-accent flex items-center justify-center"
          >
            <Icon
              name="menu"
              size={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Harga
            </Link>
            <Link
              href="/sign-up"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Daftar
            </Link>
            <Link
              href="/sign-in"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Masuk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
