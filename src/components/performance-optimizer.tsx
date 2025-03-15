"use client";

import { useEffect, useState } from "react";

/**
 * Interface untuk Navigator Connection API
 *
 * API ini digunakan untuk mendapatkan informasi tentang koneksi jaringan pengguna
 * dan tidak didukung secara default oleh TypeScript, sehingga kita perlu mendefinisikannya
 */
interface ConnectionType {
  effectiveType?: string; // Tipe koneksi efektif (4g, 3g, 2g, slow-2g)
  saveData?: boolean; // Apakah mode hemat data aktif
  type?: string; // Tipe koneksi (wifi, cellular, etc)
  downlink?: number; // Kecepatan download dalam Mbps
  rtt?: number; // Round-trip time dalam ms
  addEventListener?: (type: string, listener: EventListener) => void;
  removeEventListener?: (type: string, listener: EventListener) => void;
  addListener?: (listener: any) => void;
  removeListener?: (listener: any) => void;
}

/**
 * Memperluas tipe Navigator untuk mendukung Connection API
 *
 * Browser yang berbeda mungkin mengimplementasikan API ini dengan nama yang berbeda
 * (connection, mozConnection, webkitConnection)
 */
interface NavigatorWithConnection extends Navigator {
  connection?: ConnectionType;
  mozConnection?: ConnectionType;
  webkitConnection?: ConnectionType;
}

/**
 * Komponen untuk mengoptimalkan performa berdasarkan preferensi pengguna
 *
 * Komponen ini mendeteksi:
 * 1. Preferensi reduced motion (untuk pengguna yang sensitif terhadap animasi)
 * 2. Preferensi reduced data (untuk pengguna yang ingin menghemat data)
 * 3. Tipe koneksi (untuk mengoptimalkan pengalaman pada koneksi lambat)
 *
 * Berdasarkan deteksi tersebut, komponen ini menambahkan kelas CSS ke document.documentElement
 * yang dapat digunakan untuk mengoptimalkan UI
 */
export function PerformanceOptimizer() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [prefersReducedData, setPrefersReducedData] = useState(false);
  const [connectionType, setConnectionType] = useState<string | null>(null);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Fungsi untuk mendeteksi apakah browser mendukung fitur tertentu
    const supportsFeature = (feature: string): boolean => {
      try {
        return feature in window;
      } catch (e) {
        return false;
      }
    };

    // Variabel untuk menyimpan fungsi handler
    // Dideklarasikan di luar blok kondisional agar dapat diakses di cleanup function
    let handleMotionChange: ((e: MediaQueryListEvent) => void) | null = null;
    let handleDataChange: ((e: MediaQueryListEvent) => void) | null = null;
    let handleConnectionChange: (() => void) | null = null;

    // Deteksi preferensi reduced motion
    if (supportsFeature("matchMedia")) {
      // Gunakan any untuk mengatasi perbedaan API di browser lama
      const motionQuery: any = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(motionQuery.matches);

      handleMotionChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
        if (e.matches) {
          document.documentElement.classList.add("reduce-motion");
        } else {
          document.documentElement.classList.remove("reduce-motion");
        }
      };

      // Gunakan addEventListener jika tersedia, atau fallback ke older API
      if ("addEventListener" in motionQuery) {
        motionQuery.addEventListener("change", handleMotionChange);
      } else if ("addListener" in motionQuery) {
        motionQuery.addListener(handleMotionChange);
      }

      // Deteksi preferensi reduced data
      const dataQuery: any = window.matchMedia("(prefers-reduced-data: reduce)");
      setPrefersReducedData(dataQuery.matches);

      handleDataChange = (e: MediaQueryListEvent) => {
        setPrefersReducedData(e.matches);
        if (e.matches) {
          document.documentElement.classList.add("reduce-data");
        } else {
          document.documentElement.classList.remove("reduce-data");
        }
      };

      if ("addEventListener" in dataQuery) {
        dataQuery.addEventListener("change", handleDataChange);
      } else if ("addListener" in dataQuery) {
        dataQuery.addListener(handleDataChange);
      }

      // Terapkan kelas berdasarkan preferensi
      if (prefersReducedMotion) {
        document.documentElement.classList.add("reduce-motion");
      }

      if (prefersReducedData) {
        document.documentElement.classList.add("reduce-data");
      }
    }

    // Deteksi tipe koneksi
    const nav = navigator as NavigatorWithConnection;
    // Gunakan any untuk mengatasi perbedaan API di browser lama
    const connection: any = nav.connection || nav.mozConnection || nav.webkitConnection;

    if (connection) {
      // Deteksi tipe koneksi
      const getConnectionType = () => {
        if (connection.effectiveType) {
          return connection.effectiveType;
        }
        if (connection.type) {
          return connection.type;
        }
        return null;
      };

      // Deteksi apakah koneksi lambat
      const checkIfSlowConnection = () => {
        if (connection.effectiveType) {
          return ["slow-2g", "2g", "3g"].includes(connection.effectiveType);
        }
        if (connection.downlink !== undefined && connection.rtt !== undefined) {
          // Koneksi lambat jika downlink < 1Mbps atau RTT > 500ms
          return connection.downlink < 1 || connection.rtt > 500;
        }
        return false;
      };

      const connType = getConnectionType();
      setConnectionType(connType);

      const isSlow = checkIfSlowConnection() || connection.saveData === true;
      setIsSlowConnection(isSlow);

      if (isSlow) {
        document.documentElement.classList.add("reduce-data");
      }

      handleConnectionChange = () => {
        const newConnType = getConnectionType();
        setConnectionType(newConnType);

        const newIsSlow = checkIfSlowConnection() || connection.saveData === true;
        setIsSlowConnection(newIsSlow);

        if (newIsSlow) {
          document.documentElement.classList.add("reduce-data");
        } else {
          document.documentElement.classList.remove("reduce-data");
        }
      };

      // Tambahkan event listener jika tersedia
      if ("addEventListener" in connection) {
        connection.addEventListener("change", handleConnectionChange);
      } else if ("addListener" in connection) {
        connection.addListener(handleConnectionChange);
      }

      // Cleanup untuk connection
      return () => {
        if (supportsFeature("matchMedia") && handleMotionChange && handleDataChange) {
          const motionQuery: any = window.matchMedia("(prefers-reduced-motion: reduce)");
          const dataQuery: any = window.matchMedia("(prefers-reduced-data: reduce)");

          if ("removeEventListener" in motionQuery) {
            motionQuery.removeEventListener("change", handleMotionChange);
          } else if ("removeListener" in motionQuery) {
            motionQuery.removeListener(handleMotionChange);
          }

          if ("removeEventListener" in dataQuery) {
            dataQuery.removeEventListener("change", handleDataChange);
          } else if ("removeListener" in dataQuery) {
            dataQuery.removeListener(handleDataChange);
          }
        }

        if (handleConnectionChange) {
          if ("removeEventListener" in connection) {
            connection.removeEventListener("change", handleConnectionChange);
          } else if ("removeListener" in connection) {
            connection.removeListener(handleConnectionChange);
          }
        }
      };
    }

    // Cleanup jika tidak ada connection
    return () => {
      if (supportsFeature("matchMedia") && handleMotionChange && handleDataChange) {
        const motionQuery: any = window.matchMedia("(prefers-reduced-motion: reduce)");
        const dataQuery: any = window.matchMedia("(prefers-reduced-data: reduce)");

        if ("removeEventListener" in motionQuery) {
          motionQuery.removeEventListener("change", handleMotionChange);
        } else if ("removeListener" in motionQuery) {
          motionQuery.removeListener(handleMotionChange);
        }

        if ("removeEventListener" in dataQuery) {
          dataQuery.removeEventListener("change", handleDataChange);
        } else if ("removeListener" in dataQuery) {
          dataQuery.removeListener(handleDataChange);
        }
      }
    };
  }, []);

  // Komponen ini tidak merender apa pun, hanya menambahkan kelas CSS ke document.documentElement
  return null;
}

export default PerformanceOptimizer;
