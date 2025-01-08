"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageData } from "@/data/images";
import { ImageCarousel } from "./ImageCarousel";
import React from "react";

interface MemoryGridProps {
  memories: ImageData[];
}

export function MemoryGallery({ memories }: MemoryGridProps) {
  const imageUrls = React.useMemo(
    () => memories.map((item) => item.url),
    [memories]
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
      {memories.map((memory, index) => (
        <div
          onClick={() => {
            setSelectedIndex(index);
            setIsOpen(true);
          }}
          key={memory.key}
        >
          <MemoryItem memory={memory} />
        </div>
      ))}
      <ImageCarousel
        images={imageUrls}
        title="Gallery"
        open={isOpen}
        onOpenChangeAction={setIsOpen}
        initialIndex={selectedIndex}
      />
    </div>
  );
}

function MemoryItem({ memory }: { memory: ImageData }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse">
          <div className="h-full w-full bg-gray-300" />
        </div>
      )}
      <Image
        src={memory.url}
        alt={memory.name}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
