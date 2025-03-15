"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string;
  loadingClassName?: string;
  loadedClassName?: string;
  errorClassName?: string;
  withBlur?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.jpg",
  className,
  loadingClassName,
  loadedClassName,
  errorClassName,
  withBlur = true,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
    setError(false);
    if (!priority) setLoading(true);
  }, [src, priority]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {withBlur && loading && !priority && (
        <div className={cn("absolute inset-0 bg-muted/20 animate-pulse", loadingClassName)} />
      )}
      <Image
        src={error ? fallbackSrc : currentSrc}
        alt={alt}
        className={cn(
          "transform-gpu backface-hidden transition-medium",
          loading && !priority ? "opacity-0" : "opacity-100",
          error ? errorClassName : loading ? loadingClassName : loadedClassName,
        )}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        priority={priority}
        {...props}
      />
    </div>
  );
}

export default OptimizedImage;
