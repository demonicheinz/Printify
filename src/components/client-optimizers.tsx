"use client";

import dynamic from "next/dynamic";

// Lazy load optimizers
const FontPreloader = dynamic(() => import("@/components/font-preloader"), { ssr: false });
const PerformanceOptimizer = dynamic(() => import("@/components/performance-optimizer"), {
  ssr: false,
});

/**
 * Komponen client yang memuat optimizers
 *
 * Komponen ini memuat FontPreloader dan PerformanceOptimizer dengan dynamic import
 * dan ssr: false untuk memastikan mereka hanya dijalankan di client-side.
 */
export function ClientOptimizers() {
  return (
    <>
      <FontPreloader />
      <PerformanceOptimizer />
    </>
  );
}

export default ClientOptimizers;
