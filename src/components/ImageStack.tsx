"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "./ImageCarousel";

interface ImageStackProps {
  images: string[];
  title: string;
  maxDisplay?: number;
}

export function ImageStack({ images, title, maxDisplay = 5 }: ImageStackProps) {
  const [open, setOpen] = React.useState(false);
  const displayImages = images.slice(0, maxDisplay);
  const remainingCount = Math.max(0, images.length - maxDisplay);

  return (
    <>
      <Button
        variant="ghost"
        className="p-0 h-auto w-full hover:bg-transparent group"
        onClick={() => setOpen(true)}
      >
        <div className="relative w-full h-[250px] flex items-center justify-center">
          {displayImages.map((src, index) => (
            <div
              key={src}
              className={cn(
                "absolute",
                "w-[250px] h-[200px]",
                "transform transition-all duration-300",
                "border-4 border-background dark:border-background-dark rounded-lg overflow-hidden",
                "shadow-md dark:shadow-md-dark",
                "group-hover:scale-105",
                {
                  "hover:rotate-0 z-50": index === 0,
                  "-rotate-6 left-[15%] z-40": index === 1,
                  "rotate-6 right-[15%] z-30": index === 2,
                  "-rotate-12 left-[10%] z-20": index === 3,
                  "rotate-12 right-[10%] z-10": index === 4,
                }
              )}
            >
              <Image
                src={src}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className={cn(
                "absolute bottom-4 right-4 z-50",
                "bg-background/90 dark:bg-background-dark/90",
                "px-4 py-2 rounded-lg",
                "shadow-sm dark:shadow-sm-dark",
                "font-bold text-foreground"
              )}
            >
              +{remainingCount} more
            </div>
          )}
        </div>
      </Button>

      <ImageCarousel
        images={images}
        title={title}
        open={open}
        onOpenChangeAction={setOpen}
      />
    </>
  );
}
