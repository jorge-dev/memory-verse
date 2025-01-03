"use client";

import * as React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageStackProps {
  images: string[];
  title: string;
  maxDisplay?: number;
}

export function ImageStack({ images, title, maxDisplay = 5 }: ImageStackProps) {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const displayImages = images.slice(0, maxDisplay);
  const remainingCount = Math.max(0, images.length - maxDisplay);

  const showNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const showPrevious = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case "ArrowLeft":
          showPrevious();
          break;
        case "ArrowRight":
          showNext();
          break;
        case "Escape":
          setOpen(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, showNext, showPrevious]);

  // Reset index when dialog opens
  React.useEffect(() => {
    if (open) {
      setCurrentIndex(0);
    }
  }, [open]);

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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] h-[90vh] p-0 overflow-hidden bg-background dark:bg-background-dark">
          <DialogHeader className="absolute top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background-dark/80 backdrop-blur-sm p-4">
            <DialogTitle className="text-lg font-semibold text-foreground">
              {title} - {currentIndex + 1} of {images.length}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-foreground hover:text-foreground/80"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>

          <div className="relative w-full h-full flex items-center justify-center bg-background dark:bg-background-dark">
            <div className="relative w-full h-full">
              {images.map((src, index) => (
                <div
                  key={src}
                  className={cn(
                    "absolute inset-0 w-full h-full transition-all duration-300 transform",
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  )}
                >
                  <div className="relative w-full h-full p-16">
                    <Image
                      src={src}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-contain"
                      priority={index === currentIndex}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="icon"
              className={cn(
                "absolute left-4 h-12 w-12 rounded-full",
                "bg-background/80 dark:bg-background-dark/80",
                "backdrop-blur-sm shadow-lg",
                "text-foreground hover:text-foreground/80"
              )}
              onClick={showPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className={cn(
                "absolute right-4 h-12 w-12 rounded-full",
                "bg-background/80 dark:bg-background-dark/80",
                "backdrop-blur-sm shadow-lg",
                "text-foreground hover:text-foreground/80"
              )}
              onClick={showNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-foreground w-4"
                    : "bg-foreground/30 hover:bg-foreground/50"
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
