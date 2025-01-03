"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  title: string;
  open: boolean;
  onOpenChangeAction: (open: boolean) => void;
}

export function ImageCarousel({
  images,
  title,
  open,
  onOpenChangeAction,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState<"left" | "right">(
    "right"
  );
  const [previousIndex, setPreviousIndex] = React.useState(0);

  const showNext = React.useCallback(() => {
    setPreviousIndex(currentIndex);
    setSlideDirection("right");
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length, currentIndex]);

  const showPrevious = React.useCallback(() => {
    setPreviousIndex(currentIndex);
    setSlideDirection("left");
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length, currentIndex]);

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
          onOpenChangeAction(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, showNext, showPrevious, onOpenChangeAction]);

  // Reset index when dialog opens
  React.useEffect(() => {
    if (open) {
      setCurrentIndex(0);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChangeAction}>
      <DialogContent className="max-w-[95vw] h-[90vh] p-0 overflow-hidden ">
        <DialogTitle className="hidden">{title}</DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center bg-gray-200 dark:bg-background-dark">
          <div className="relative w-full h-full">
            {images.map((src, index) => (
              <div
                key={src}
                className={cn(
                  "absolute inset-0 w-full h-full transform",
                  "transition-all duration-700 ease-in-out",
                  index === currentIndex
                    ? "opacity-100 translate-x-0 scale-100"
                    : index === previousIndex
                    ? `opacity-0 ${
                        slideDirection === "left"
                          ? "translate-x-full"
                          : "-translate-x-full"
                      } scale-95`
                    : "opacity-0 scale-95"
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
  );
}
