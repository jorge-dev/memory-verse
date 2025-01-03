"use client";

import * as React from "react";
import Image from "next/image";
import { ImageCarousel } from "./ImageCarousel";

interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  width: number; // Original image width
  height: number; // Original image height
}

interface SimpleGalleryProps {
  items: GalleryItem[];
}

const SimpleGallery: React.FC<SimpleGalleryProps> = ({ items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const imageUrls = React.useMemo(
    () => items.map((item) => item.imageUrl),
    [items]
  );

  return (
    <div className="h-full w-full overflow-y-auto px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[10px]">
        {items.map((item, index) => {
          const aspectRatio = item.width / item.height;
          return (
            <div
              key={item.id}
              className="relative cursor-pointer group mb-2"
              style={{ gridRowEnd: `span ${Math.ceil(aspectRatio * 10)}` }}
              onClick={() => {
                setSelectedIndex(index);
                setIsOpen(true);
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105 object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          );
        })}
      </div>

      <ImageCarousel
        images={imageUrls}
        title="Gallery"
        open={isOpen}
        onOpenChangeAction={setIsOpen}
        initialIndex={selectedIndex} // Pass selectedIndex here
      />
    </div>
  );
};

export default SimpleGallery;
