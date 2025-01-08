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
        <div className=" mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <p className="text-lg">Back</p>
            </Link>
          </Button>
          <h1 className="text-4xl font-bold">Our Memories</h1>
          <div className="w-[72px]"></div> {/* Spacer to center the title */}
        </div>
      </header>
      <main className="flex-grow pt-16">
        <div className=" mx-auto px-4 py-8">
          <MemoryGallery memories={images} />
        </div>
      </main>
    </div>
  );
}
