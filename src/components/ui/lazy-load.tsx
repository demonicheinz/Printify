"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LazyLoadProps {
  children: ReactNode;
  className?: string;
  placeholder?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  fallbackInView?: boolean;
}

export function LazyLoad({
  children,
  className,
  placeholder,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  fallbackInView = false,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(fallbackInView);
  const [hasBeenVisible, setHasBeenVisible] = useState(fallbackInView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Jika browser tidak mendukung IntersectionObserver, tampilkan konten
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      setHasBeenVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        if (visible && triggerOnce) {
          setHasBeenVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Jika triggerOnce true dan konten sudah pernah terlihat, tetap tampilkan
  const shouldRenderContent = triggerOnce ? hasBeenVisible : isVisible;

  return (
    <div
      ref={ref}
      className={cn("cv-auto", className)}
    >
      {shouldRenderContent
        ? children
        : placeholder || <div className="h-40 bg-muted/10 animate-pulse rounded-md" />}
    </div>
  );
}

export default LazyLoad;
