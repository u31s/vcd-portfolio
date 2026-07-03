"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageFrameProps {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
}

export default function ImageFrame({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
}: ImageFrameProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#EFEBE3]",
        aspect,
        className
      )}
    >
      {!error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setError(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="text-xs tracking-wide text-muted">
            此处替换为真实项目图片
          </span>
          <span className="text-[10px] text-muted/60">{src}</span>
        </div>
      )}
    </div>
  );
}
