"use client";
import Gallery from "@/components/SimpleGallery";
import { AnimatedSection } from "@/components/AnimatedSection";
import { images } from "@/data/images";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <AnimatedSection delay={0.2} className="h-full">
        <div className="relative pt-4 px-4">
          <Link
            href="/"
            className="absolute left-4 top-4 inline-flex items-center px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-200"
          >
            ← Back
          </Link>
          <h1 className="text-4xl font-bold text-center mb-4">Our Memories</h1>
        </div>
        <div className="h-[calc(100vh-5rem)]">
          <Gallery items={images} />
        </div>
      </AnimatedSection>
    </main>
  );
}
