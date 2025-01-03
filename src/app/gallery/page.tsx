"use client";
import Gallery from "@/components/SimpleGallery";
import { AnimatedSection } from "@/components/AnimatedSection";
import { images } from "@/data/images";

export default function GalleryPage() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <AnimatedSection delay={0.2} className="h-full">
        <h1 className="text-4xl font-bold text-center mb-4 pt-4">
          Our Memories
        </h1>
        <div className="h-[calc(100vh-5rem)]">
          <Gallery items={images} />
        </div>
      </AnimatedSection>
    </main>
  );
}
