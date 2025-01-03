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
    title: "Your Thoughtfulness",
    description:
      "The way you cherished a small gesture, like me giving you my sweater on that mission trip, shows how much you value the little things in life and love.",
  },
  {
    title: "Your Courage",
    description:
      "You opened your heart to me without hesitation, even when it took great bravery. That moment changed our lives forever, and I’m so thankful for it.",
  },
  {
    title: "Your Commitment",
    description:
      "You spent your time and savings visiting me so many times before I moved to Canada. That devotion is something I’ll always treasure and admire.",
  },
  {
    title: "Your Steadfastness",
    description:
      "Through every challenge, you’ve been my constant source of strength. Your quiet support and unwavering love give me the courage to keep going.",
  },
  {
    title: "Your Playfulness",
    description:
      "Your silly jokes, playful nibbles, and that infectious laugh of yours can brighten even the dullest day. Life with you is always full of joy.",
  },
  {
    title: "Your Drive",
    description:
      "Whether it’s your passion for books or your determination to give our kids the best, the energy you bring to what you love inspires me every day.",
  },
  {
    title: "Your Humor",
    description:
      "You make me laugh with your playful quips, like when you ask how I can be both rude and handsome. Your humor always keeps me smiling.",
  },
  {
    title: "Your Strength",
    description:
      "In tough times, you face challenges head-on with resilience and grace. Your strength inspires me and reminds me of how incredible you are.",
  },
  {
    title: "Your Curiosity",
    description:
      "Your love for books and learning reflects your thoughtful and curious mind. I admire how you’re always exploring and growing in so many ways.",
  },
  {
    title: "Your Love for Family",
    description:
      "You pour your heart into caring for all of us, making sure our family is full of love, joy, and support. You’re truly the heart of our home.",
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
                <Card className="transition-all duration-300 border-none bg-gray-100/50 dark:bg-gray-800/50  h-full flex flex-col">
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
