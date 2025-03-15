import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan class names dengan clsx dan tailwind-merge
 * Berguna untuk menggabungkan class names dari berbagai sumber
 * dan menyelesaikan konflik class Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
