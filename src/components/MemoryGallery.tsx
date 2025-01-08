"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageData } from "@/data/images";
import { ImageCarousel } from "./ImageCarousel";
import React from "react";
import { YearDivider } from "./YearDivider";

interface MemoryGridProps {
  memories: ImageData[];
  selectedYear: number | null;
}

export function MemoryGallery({ memories, selectedYear }: MemoryGridProps) {
  const imageUrls = React.useMemo(
    () => memories.map((item) => item.url),
    [memories]
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const groupedMemories = React.useMemo(() => {
    const filtered = selectedYear
      ? memories.filter((memory) => memory.year === selectedYear)
      : memories;

    return filtered.reduce((groups, memory) => {
      const year = memory.year;
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(memory);
      return groups;
    }, {} as Record<number, ImageData[]>);
  }, [memories, selectedYear]);

  // Sort years in descending order
  const sortedYears = React.useMemo(
    () =>
      Object.keys(groupedMemories)
        .map(Number)
        .sort((a, b) => b - a),
    [groupedMemories]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortedYears.map((year) => (
        <React.Fragment key={year}>
          <YearDivider year={year} />
          {groupedMemories[year].map((memory) => (
            <div
              onClick={() => {
                // Calculate the absolute index in the filtered array
                const absoluteIndex = memories.findIndex(
                  (m) => m.key === memory.key
                );
                setSelectedIndex(absoluteIndex);
                setIsOpen(true);
              }}
              key={memory.key}
            >
              <MemoryItem memory={memory} />
            </div>
          ))}
        </React.Fragment>
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
        loading="lazy"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        sizes="(max-width: 640px) 100vw,
               (max-width: 768px) 50vw,
               (max-width: 1024px) 33vw,
               25vw"
      />
    </div>
  );
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
