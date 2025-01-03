"use client";
import Gallery from "@/components/SimpleGallery";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useState, useEffect } from "react";

// Helper function to get random dimensions
const getRandomDimensions = () => {
  const sizes = [
    { w: 800, h: 600 }, // Landscape
    { w: 600, h: 800 }, // Portrait
    { w: 800, h: 800 }, // Square
    // { w: 1200, h: 600 }, // Wide landscape
    // { w: 400, h: 800 }, // Tall portrait
  ];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const initialGalleryItems = Array.from({ length: 20 }, (_, index) => {
  const { w, h } = getRandomDimensions();
  return {
    id: index + 1,
    title: `Image ${index + 1}`,
    imageUrl: `https://picsum.photos/seed/${index}-w/${w}/${h}.webp`,
    width: w,
    height: h,
  };
});

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<
    Array<{
      id: number;
      title: string;
      imageUrl: string;
      width: number;
      height: number;
    }>
  >([]);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        // Simulate fetching data from an API
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setGalleryItems(initialGalleryItems);
      } catch (error) {
        console.error("Failed to fetch gallery items", error);
      }
    };

    fetchGalleryItems();
  }, []);
  return (
    <main className="h-screen w-screen overflow-hidden">
      <AnimatedSection delay={0.2} className="h-full">
        <h1 className="text-4xl font-bold text-center mb-4 pt-4">
          Our Memories
        </h1>
        <div className="h-[calc(100vh-5rem)]">
          <Gallery items={galleryItems} />
        </div>
      </AnimatedSection>
    </main>
  );
}
