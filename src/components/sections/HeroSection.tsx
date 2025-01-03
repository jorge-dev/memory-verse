"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  const image1 = "https://picsum.photos/seed/hero1/3840/2160.webp";
  const image2 = "https://picsum.photos/seed/hero2/3840/2160.webp";
  const image3 = "https://picsum.photos/seed/hero3/3840/2160.webp";
  const image4 = "https://picsum.photos/seed/hero4/3840/2160.webp";
  const image5 = "https://picsum.photos/seed/hero5/3840/2160.webp";
  const image6 = "https://picsum.photos/seed/hero6/3840/2160.webp";
  const image7 = "https://picsum.photos/seed/hero7/3840/2160.webp";
  const image8 =
    "https://utfs.io/a/gqr91h87ll/IcwJR6uyNd2fTBmoz5l8FgW3GZLdJMrQPImcj5fpaRHwCkx1";

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scaleLastImage = useTransform(scrollYProgress, [0, 0.9, 1], [1, 4, 4]);

  const opacity = useTransform(scrollYProgress, [0.1, 1], [0, 1]);

  const pictures = [
    {
      src: image1,
      scale: scale4,
    },
    {
      src: image2,
      scale: scale5,
    },
    {
      src: image3,
      scale: scale6,
    },
    {
      src: image4,
      scale: scale5,
    },
    {
      src: image5,
      scale: scale6,
    },
    {
      src: image6,
      scale: scale8,
    },
    {
      src: image7,
      scale: scale9,
    },
    {
      src: image8,
      scale: scaleLastImage,
    },
  ];

  return (
    <section ref={container} className="h-[300vh]  relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="w-full h-full absolute top-0 flex items-center justify-center"
            >
              <div
                className={`relative ${
                  index === 0
                    ? "w-full h-full"
                    : index === 1
                    ? "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]"
                    : index === 2
                    ? "w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]"
                    : index === 3
                    ? "w-[25vw] h-[25vh] left-[27.5vw]"
                    : index === 4
                    ? "w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]"
                    : index === 5
                    ? "w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]"
                    : index === 6
                    ? "w-[25vw] h-[25vh] top-[27.5vh] left-[29.5vw]"
                    : "w-[25vw] h-[25vh]"
                }`}
              >
                <Image src={src} fill alt="image" className="object-cover" />
              </div>
            </motion.div>
          );
        })}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity }}
        >
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl opacity-90">{subtitle}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
