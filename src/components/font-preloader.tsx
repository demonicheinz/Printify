"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function FontPreloader() {
  const pathname = usePathname();

  useEffect(() => {
    // Preload font utama
    const fontFiles = [
      "/fonts/Inter-Regular.woff2",
      "/fonts/Inter-Medium.woff2",
      "/fonts/Inter-SemiBold.woff2",
      "/fonts/Inter-Bold.woff2",
    ];

    // Preload font mono hanya pada halaman yang mungkin membutuhkannya
    if (pathname.includes("/dashboard") || pathname.includes("/admin")) {
      fontFiles.push("/fonts/JetBrainsMono-Regular.woff2", "/fonts/JetBrainsMono-Medium.woff2");
    }

    // Buat link preload untuk setiap font
    fontFiles.forEach((fontFile) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = fontFile;
      link.as = "font";
      link.type = "font/woff2";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });

    // Cleanup
    return () => {
      document.querySelectorAll('link[rel="preload"][as="font"]').forEach((el) => {
        document.head.removeChild(el);
      });
    };
  }, [pathname]);

  return null;
}

export default FontPreloader;
