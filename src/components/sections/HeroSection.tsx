"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { Pacifico, Playwrite_IS } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const playwriteIs = Playwrite_IS({
  variable: "--font-playwrite-is",
  weight: ["400", "200"],
});

export function HeroSection() {
  const imageSet = {
    background: "https://images.unsplash.com/photo-1625667866036-8b40f7caa094",
    topCenter: "https://images.unsplash.com/photo-1513279922550-250c2129b13a",
    topLeft: "https://images.unsplash.com/photo-1531448143467-9d228363342d",
    topRight: "https://images.unsplash.com/photo-1501901609772-df0848060b33",
    bottomCenter:
      "https://images.unsplash.com/photo-1539464614836-672f5256d3a9",
    bottomLeft: "https://images.unsplash.com/photo-1508407576665-2d9a5d638a7e",
    bottomRight: "https://images.unsplash.com/photo-1510932742089-bef92acabb5b",
    center: "https://images.unsplash.com/photo-1490648875801-10d926b882d3",
  };

  const title = "To My Beloved";
  const subtitle =
    "Every moment with you is a treasure, every smile a gift, and every day an adventure. Our love story continues to unfold in the most beautiful ways...";

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
      src: imageSet.background,
      scale: scale4,
    },
    {
      src: imageSet.topCenter,
      scale: scale5,
    },
    {
      src: imageSet.topLeft,
      scale: scale6,
    },
    {
      src: imageSet.topRight,
      scale: scale5,
    },
    {
      src: imageSet.bottomCenter,
      scale: scale6,
    },
    {
      src: imageSet.bottomLeft,
      scale: scale8,
    },
    {
      src: imageSet.bottomRight,
      scale: scale9,
    },
    {
      src: imageSet.center,
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
                className={`relative object-cover  ${
                  index === 0
                    ? "w-full h-full"
                    : index === 1
                    ? "w-[35vw] h-[30vh] -top-[33vh] left-[0vw]" // top center
                    : index === 2
                    ? "w-[30vw] h-[45vh] -top-[20vh] -left-[34vw]" // left first
                    : index === 3
                    ? "w-[30vw] h-[45vh] -top-[20vh] left-[34vw]" // right first
                    : index === 4
                    ? "w-[25vw] h-[25vh] top-[32.5vh] left-[0vw]" // bottom center
                    : index === 5
                    ? "w-[33vw] h-[30vh] top-[20.5vh] -left-[32.5vw]" // left second
                    : index === 6
                    ? "w-[33vw] h-[30vh] top-[20.5vh] left-[32.5vw]" // right second
                    : "w-[30vw] h-[30vh]" // main image
                }`}
              >
                <Image
                  priority={true}
                  placeholder="empty"
                  src={src}
                  fill
                  alt="image"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          );
        })}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity }}
        >
          <div className="text-center text-white px-4 max-w-3xl mx-auto bg-gray-900 bg-opacity-50 py-4 rounded-2xl">
            <h1
              className={`${pacifico.className} text-6xl md:text-6xl mb-6 leading-tight`}
            >
              {title}
            </h1>
            <p
              className={`${playwriteIs.className} text-lg md:text-2xl opacity-90 leading-relaxed`}
            >
              {subtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
