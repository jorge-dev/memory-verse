"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Reason {
  title: string;
  description: string;
}

const loveReasons: Reason[] = [
  {
    title: "Your Mission Spirit",
    description:
      "The way you care for others and spread joy, just like during that first mission trip.",
  },
  {
    title: "Your Bravery",
    description:
      "Taking that first step to tell me how you felt (thank goodness you did!).",
  },
  {
    title: "Your Sense of Adventure",
    description:
      "From mission trips to mountain weddings, you're always up for anything!",
  },
  {
    title: "Your Support",
    description: "Being my rock through every challenge and celebration.",
  },
  {
    title: "Your Laughter",
    description: "The sound that makes even the darkest days brighter.",
  },
  {
    title: "Your Passion",
    description: "The dedication you show in everything you do.",
  },
  {
    title: "Your Love",
    description: "The unconditional love you give that makes life beautiful.",
  },
];

export function LoveReasons() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      #{index + 1}
                    </span>
                    <span className="text-xl">{reason.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
