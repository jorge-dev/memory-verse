"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { Pacifico, Playwrite_IS } from "next/font/google";
import { getByNames } from "../../data/images";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const playwriteIs = Playwrite_IS({
  variable: "--font-playwrite-is",
  weight: ["400", "200"],
});

export function HeroSection() {
  const uploadThingBase = "https://utfs.io/a/gqr91h87ll/";
  const imageNames = [
    "2014 - 13 of 24.jpeg", // main
    "2015 - 8 of 84.jpeg", //top center
    "2014 - 19 of 24.jpeg", // left top
    "2014 - 11 of 24.jpeg", // right top
    "2015 - 18 of 84.jpeg", // bottom center
    "2015 - 12 of 84.jpeg", // left bottom
    "2016 - 6 of 29.jpeg", // right bottom
    "2015 - 23 of 84.jpeg", // main
  ];
  const images = getByNames(imageNames);

  const title = "To My Beloved Wife";
  const subtitle =
    "A decade of love, laughter, and countless beautiful moments. Every day I fall more in love with you. This is our story...";

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
      src: uploadThingBase + images[7].key,
      scale: scale4,
    },
    {
      src: uploadThingBase + images[6].key,
      scale: scale5,
    },
    {
      src: uploadThingBase + images[5].key,
      scale: scale6,
    },
    {
      src: uploadThingBase + images[4].key,
      scale: scale5,
    },
    {
      src: uploadThingBase + images[3].key,
      scale: scale6,
    },
    {
      src: uploadThingBase + images[2].key,
      scale: scale8,
    },
    {
      src: uploadThingBase + images[1].key,
      scale: scale9,
    },
    {
      src: uploadThingBase + images[0].key,
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
