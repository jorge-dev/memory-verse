"use client";

import { useScroll } from "framer-motion";
import CardMemories from "../CardMemories";
import { useRef } from "react";

interface Memory {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  color: string;
}
const memories: Memory[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/memory1/800/600",
    date: "August 2011",
    title: "The Mission Trip Beginning",
    description:
      "That first glimpse of you on the bus. Who knew God had such amazing plans in store? 🙏",
    color: "rgba(255, 218, 224, 0.8)", // Soft pink
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/memory2/800/600",
    date: "January 2012",
    title: "When Everything Changed",
    description:
      "From mission partners to life partners - best upgrade ever! 🎉",
    color: "rgba(204, 229, 255, 0.8)", // Soft blue
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/memory3/800/600",
    date: "January 2015",
    title: "Mountain-Top Promises",
    description:
      "Our wedding day in the mountains - pretty sure we were literally on cloud nine! ⛰️",
    color: "rgba(215, 236, 208, 0.8)", // Soft green
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/memory4/800/600",
    date: "June 2019",
    title: "The Ultimate Adventure",
    description:
      "We've been on some wild rides, but nothing compares to the journey of parenthood! 👶",
    color: "rgba(255, 248, 204, 0.8)", // Soft yellow
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/memory6/800/600",
    date: "Present Day",
    title: "The Future Awaits",
    description:
      "Who knows what's next? I'm just excited to find out with you by my side. 💖",
    // Soft purple
    color: "rgba(229, 204, 255, 0.8)",
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
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
