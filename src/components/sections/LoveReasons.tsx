"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Magnetic } from "../ui/magnetic";

interface Reason {
  title: string;
  description: string;
}

const loveReasons: Reason[] = [
  {
    title: "Your Kindness",
    description:
      "The way you care for others and bring warmth to everyone around you never fails to amaze me.",
  },
  {
    title: "Your Smile",
    description:
      "Your smile brightens even the darkest days and makes every moment more beautiful.",
  },
  {
    title: "Your Patience",
    description:
      "The way you handle life's challenges with grace and understanding inspires me daily.",
  },
  {
    title: "Your Dreams",
    description:
      "Your ambitious spirit and determination to chase your dreams make me fall in love with you more each day.",
  },
  {
    title: "Your Energy",
    description:
      "Your zest for life and adventure keeps our journey exciting and full of wonderful surprises.",
  },
  {
    title: "Your Strength",
    description:
      "The quiet strength you show in difficult times gives me courage and hope.",
  },
  {
    title: "Your Wisdom",
    description:
      "Your thoughtful advice and perspective help me see the world in new ways.",
  },
  {
    title: "Your Support",
    description:
      "You're my biggest cheerleader and strongest supporter in every endeavor.",
  },
  {
    title: "Your Compassion",
    description:
      "Your endless capacity to care and understand others touches my heart deeply.",
  },
  {
    title: "Your Love",
    description:
      "The way you love, unconditionally and completely, makes every day feel like a gift.",
  },
];

export function LoveReasons() {
  const springOptions = { bounce: 0.1 };
  return (
    <section className="relative mt-[10vh]">
      <div className="text-center mb-16">
        <h2 className="scroll-m-20 text-5xl md:text-7xl mb-4 font-extrabold tracking-tight lg:text-5xl text-foreground">
          Reasons Why I Love You
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
          Every reason is a testament to our beautiful journey together. 💝
        </p>
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*]:h-[250px] justify-center">
          {loveReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96], // Improved easing curve
              }}
              viewport={{
                once: false, // Changed to false to enable exit animations
                margin: "-100px",
              }}
              className="w-full"
            >
              <Magnetic
                intensity={0.3}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <Card className="transition-all duration-300 border-none bg-gray-100/50 dark:bg-gray-800/50 h-[200px] flex flex-col overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">
                        #{index + 1}
                      </span>
                      <span className="text-xl">{reason.title}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 overflow-y-auto">
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
