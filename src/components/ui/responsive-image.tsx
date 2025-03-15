"use client";

import { OptimizedImage } from "./optimized-image";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "auto" | "square" | "video" | "portrait" | "wide";
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export function ResponsiveImage({
  src,
  alt,
  className,
  aspectRatio = "auto",
  width,
  height,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}: ResponsiveImageProps) {
  // Menentukan aspect ratio
  const aspectRatioClass = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
  };

  return (
    <div className={cn("overflow-hidden rounded-md", aspectRatioClass[aspectRatio], className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill={!width && !height}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        sizes={sizes}
        priority={priority}
        withBlur={true}
        loadingClassName="scale-105 blur-sm"
        loadedClassName="scale-100 blur-0"
        {...props}
      />
    </div>
  );
}

export default ResponsiveImage;
