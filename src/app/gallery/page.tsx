"use client";
import { images } from "@/data/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MemoryGallery } from "@/components/MemoryGallery";
import { YearFilter } from "@/components/YearFilter";
import { useState, useMemo, useCallback, useLayoutEffect } from "react";

// Header height in pixels (adjust this value based on your actual header height)
const HEADER_HEIGHT = 70; // This should match your header's actual height

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = useMemo(() => {
    const uniqueYears = new Set(images.map((image) => image.year));
    return Array.from(uniqueYears).sort((a, b) => a - b);
  }, []);

  const scrollToYear = useCallback((year: number) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  // Always scroll when selectedYear changes
  useLayoutEffect(() => {
    if (selectedYear !== null) {
      scrollToYear(selectedYear);
    } else if (years.length > 0) {
      scrollToYear(years[0]);
    }
  }, [selectedYear, years, scrollToYear]);

  const handleYearSelect = useCallback((year: number | null) => {
    setSelectedYear(year);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto px-2 py-2 sm:px-4 sm:py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-1 sm:gap-2">
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              <p className="text-sm sm:text-lg">Back</p>
            </Link>
          </Button>
          <h1 className="text-2xl sm:text-4xl font-bold">Our Memories</h1>
          <YearFilter
            years={years}
            selectedYear={selectedYear}
            onYearSelectAction={handleYearSelect}
          />
        </div>
      </header>
      <main className="flex-grow pt-12 sm:pt-16">
        <div className="mx-auto px-4 py-8">
          <MemoryGallery memories={images} selectedYear={selectedYear} />
        </div>
      </main>
    </div>
  );
}
