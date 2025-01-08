"use client";
import { images } from "@/data/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MemoryGallery } from "@/components/MemoryGallery";

export default function GalleryPage() {
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
          <div className="w-[48px] sm:w-[72px]"></div> {/* Responsive spacer */}
        </div>
      </header>
      <main className="flex-grow pt-12 sm:pt-16">
        <div className=" mx-auto px-4 py-8">
          <MemoryGallery memories={images} />
        </div>
      </main>
    </div>
  );
}
