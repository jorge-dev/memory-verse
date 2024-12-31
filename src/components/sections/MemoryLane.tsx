"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Memory {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
}

interface MemoryLaneProps {
  memories: Memory[];
}

export function MemoryLane({ memories }: MemoryLaneProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMemory = () => {
    setActiveIndex((current) => (current + 1) % memories.length);
  };

  const previousMemory = () => {
    setActiveIndex(
      (current) => (current - 1 + memories.length) % memories.length
    );
  };

  return (
    <section className="py-20 bg-white/30 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          Memory Lane
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-lg p-6">
            <button
              onClick={previousMemory}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full"
            >
              ←
            </button>
            <button
              onClick={nextMemory}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full"
            >
              →
            </button>

            <div className="space-y-4">
              <div className="relative aspect-video w-full">
                <Image
                  src={memories[activeIndex].image}
                  alt={memories[activeIndex].title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {memories[activeIndex].date}
                </p>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800 dark:text-gray-100">
                  {memories[activeIndex].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {memories[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
