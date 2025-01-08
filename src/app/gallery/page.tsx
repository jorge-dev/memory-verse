"use client";
import Gallery from "@/components/SimpleGallery";
import { AnimatedSection } from "@/components/AnimatedSection";
import { images } from "@/data/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function GalleryPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AnimatedSection delay={0.2} className="h-full">
        <header className="fixed top-0 left-0 right-0 z-10 bg-background/50 backdrop-blur-sm">
          <div className=" mx-auto pl-1 py-4 flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-1" />
                Back
              </Link>
            </Button>
            <h1 className="text-4xl font-bold">Our Memories</h1>
            <div className="w-[72px]"></div> {/* Spacer to center the title */}
          </div>
        </header>
        <div className="h-screen  overflow-y-auto mt-20">
          <Gallery items={images} />
        </div>
      </AnimatedSection>
    </main>
  );
}
