"use client";

import { useScroll } from "framer-motion";
import CardMemories from "../CardMemories";
import { useRef } from "react";
import { getByName } from "@/data/images";

interface Memory {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  color: {
    light: string;
    dark: string;
  };
}

export const memories: Memory[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1644446770253-5c6b45c38ba8",
    date: "Spring 2011",
    title: "First Glance",
    description: "That magical moment when our eyes met across the café.",
    color: {
      light: "rgba(255, 218, 224, 0.8)", // Soft pink
      dark: "rgba(255, 168, 174, 0.35)", // Lighter pink
    },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1695860800060-2b87b9ff8d12",
    date: "Winter 2014",
    title: "The Perfect Proposal",
    description:
      "Under a sky full of stars, you made me the happiest person alive.",
    color: {
      light: "rgba(204, 229, 255, 0.8)", // Soft blue
      dark: "rgba(154, 179, 255, 0.35)", // Lighter blue
    },
  },
  {
    id: 3,
    date: "Spring 2015",
    image: "https://images.unsplash.com/photo-1576694700950-47ff95f5ec81",
    title: "Our Wedding Day",
    description: "Surrounded by loved ones, we promised forever to each other.",
    color: {
      light: "rgba(215, 236, 208, 0.8)", // Soft green
      dark: "rgba(185, 206, 178, 0.35)", // Lighter green
    },
  },
  {
    id: 4,
    image: getByName("2019 - 13 of 29.jpeg")!.url,
    date: "2018",
    title: "Growing Family",
    description: "The day our little miracle made us a family of three.",
    color: {
      light: "rgba(255, 248, 204, 0.8)", // Soft yellow
      dark: "rgba(255, 228, 154, 0.35)", // Lighter yellow
    },
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1535762978982-79119ca47447",
    date: "Present Day",
    title: "Our Beautiful Life",
    description: "Every day with you is another page in our love story. ❤️",
    color: {
      light: "rgba(229, 204, 255, 0.8)", // Soft purple
      dark: "rgba(199, 154, 255, 0.35)", // Lighter purple
    },
  },
];

export function MemoryLane() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <section className="relative mt-[10vh]">
      <div className="text-center ">
        <h1 className="scroll-m-20 text-5xl md:text-7xl mb-4 font-extrabold tracking-tight lg:text-5xl text-foreground">
          Memory Lane
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          A collection of our most precious moments together, each one a
          testament to our growing love. ✨
        </p>
      </div>
      {memories.map((project, i) => {
        const targetScale = 1 - (memories.length - i) * 0.05;
        return (
          <CardMemories
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.2, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
