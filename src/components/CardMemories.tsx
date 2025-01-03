"use client";
import Image from "next/image";
import {
  useTransform,
  motion,
  useScroll,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  description: string;
  image: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const CardMemories = ({
  i,
  title,
  description,
  image,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[75vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-1/4 h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top backdrop-blur-sm dark:bg-opacity-30 dark:backdrop-blur-md shadow-lg"
      >
        <h2 className="text-center m-0 text-[28px]">{title}</h2>
        <div className="flex h-full mt-[50px] gap-[50px]">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-base first-letter:text-[28px] first-letter:font-['Title']">
              {description}
            </p>
          </div>

          <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={image}
                alt="image"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardMemories;
