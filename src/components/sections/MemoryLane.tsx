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
  color: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    image: getByName("2011 - 1 of 5.jpeg")!.url,
    date: "Summer 2011",
    title: "A Fateful Bus Ride",
    description:
      "The moment I spotted you on that mission trip bus, my heart whispered, ‘This one’s special.’",
    color: "rgba(255, 218, 224, 0.8)", // Soft pink
  },
  {
    id: 2,
    image: getByName("2015 - 12 of 84.jpeg")!.url,
    date: "Summer 2014",
    title: "Saying Yes to Forever",
    description:
      "That life-changing evening when you said 'Yes' and we began our forever.",
    color: "rgba(204, 229, 255, 0.8)", // Soft blue
  },
  {
    id: 3,
    date: "Fall 2015",
    image: getByName("2015 - 71 of 84.jpeg")!.url,
    title: "Canadian Adventure Begins",
    description:
      "Starting our new chapter together in beautiful Calgary. The wait made our reunion even sweeter! 🍁",
    color: "rgba(215, 236, 208, 0.8)", // Soft green
  },
  {
    id: 4,
    image: getByName("2019 - 13 of 29.jpeg")!.url,
    date: "2018",
    title: "Our First Little Miracle",
    description:
      "The day Emma arrived, our hearts grew in ways we never imagined possible.",
    color: "rgba(255, 248, 204, 0.8)", // Soft yellow
  },
  {
    id: 5,
    image: getByName("2024 - 21 of 23.jpeg")!.url,
    date: "Present Day",
    title: "A Home Filled with Laughter",
    description:
      "Our hearts overflow with joy as we watch our three amazing daughters grow, filling our home with endless love and laughter. 💝",
    color: "rgba(229, 204, 255, 0.8)", // Soft purple
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
