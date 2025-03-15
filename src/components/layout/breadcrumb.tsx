"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";

interface BreadcrumbProps {
  homeLabel?: string;
  homeHref?: string;
  items?: { label: string; href: string }[];
  className?: string;
}

export default function Breadcrumb({
  homeLabel = "Beranda",
  homeHref = "/",
  items = [],
  className = "",
}: BreadcrumbProps) {
  const pathname = usePathname();

  // Jika tidak ada items yang diberikan, buat otomatis dari pathname
  const breadcrumbItems =
    items.length > 0
      ? items
      : pathname
          .split("/")
          .filter(Boolean)
          .map((segment, index, segments) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`;

            // Terjemahkan segment ke Bahasa Indonesia
            let label: string;
            switch (segment) {
              case "about":
                label = "Tentang Kami";
                break;
              case "contact":
                label = "Hubungi Kami";
                break;
              case "pricing":
                label = "Harga Layanan";
                break;
              case "faq":
                label = "FAQ";
                break;
              default:
                // Untuk segment lain, gunakan format default
                label = segment
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
            }

            return { label, href };
          });

  return (
    <nav
      className={`flex items-center text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        <motion.li
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={homeHref}
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon
              name="home"
              size={16}
              className="mr-1"
            />
            <span className="hidden sm:inline">{homeLabel}</span>
          </Link>
        </motion.li>

        {breadcrumbItems.map((item, index) => (
          <motion.li
            key={item.href}
            className="flex items-center"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          >
            <Icon
              name="chevronRight"
              size={16}
              className="text-muted-foreground mx-1"
            />
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-medium text-foreground">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )}
          </motion.li>
        ))}
      </ol>
    </nav>
  );
}
