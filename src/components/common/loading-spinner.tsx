"use client";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  /**
   * Teks yang ditampilkan di samping spinner
   */
  text?: string;
  /**
   * Ukuran spinner (dalam piksel)
   */
  size?: number;
  /**
   * Kelas tambahan untuk container
   */
  className?: string;
  /**
   * Kelas tambahan untuk ikon
   */
  iconClassName?: string;
  /**
   * Kelas tambahan untuk teks
   */
  textClassName?: string;
}

export function LoadingSpinner({
  text = "Memproses...",
  size = 16,
  className,
  iconClassName,
  textClassName,
}: LoadingSpinnerProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Icon
        name="refresh"
        size={size}
        className={cn("animate-spin", text ? "mr-2" : "", iconClassName)}
      />
      {text && <span className={cn("text-sm", textClassName)}>{text}</span>}
    </div>
  );
}
