"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

interface LoveLetterProps {
  content: string;
  signature: string;
  date?: string;
}

const loveLetter: LoveLetterProps = {
  content: `My Dearest Love, ❤️

I still remember that perfect spring afternoon when our eyes first met across the café. The way the sunlight caught your smile made my heart skip a beat, and somehow I knew that moment would change my life forever.

Since then, every day has been brighter, every laugh more joyful, and every moment more meaningful because I get to share them with you. Your kindness, your strength, and your beautiful spirit continue to amaze me with each passing day.

That magical evening when we danced under the stars on our first date, I felt like we were the only two people in the world. Your laugh, your stories, and the way you saw beauty in everything around us made me fall deeper in love with you.

Our wedding day by the ocean was just the beginning of our greatest adventure. Standing there, promising forever to each other while the waves crashed behind us, I knew I was the luckiest person alive. Your vows still echo in my heart, a promise we renew with each sunrise.

Through all of life's ups and downs, your unwavering love and support have been my anchor. You have this incredible way of making even ordinary moments feel extraordinary - from quiet Sunday mornings to spontaneous road trips, every moment with you is a treasure.

As we continue writing our story together, I'm in awe of how our love grows stronger and deeper with each passing day. Your smile still makes my heart race, your touch still gives me butterflies, and your love still feels like the greatest gift I've ever received.

Looking ahead, I'm excited for all the adventures that await us, all the dreams we'll chase, and all the memories we'll create together. You make every day feel like a new chapter in the most beautiful love story ever written.`,
  signature: "Forever and Always Yours,\nWith All My Love",
  date: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  }),
};

export function LoveLetter() {
  return (
    <section className="relative mt-[10vh] mb-9">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="scroll-m-20 text-5xl md:text-7xl font-extrabold tracking-tight lg:text-5xl text-foreground">
              My Love Letter
            </h1>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-muted-foreground">
              Words from the heart, written with love 💌
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto backdrop-blur-sm border-none bg-gray-100/50 dark:bg-gray-800/50  h-full bg-opacity-50 dark:bg-opacity-50">
            <div className="p-8 md:p-12">
              <Heart className="w-8 h-8 mx-auto mb-8 text-pink-500" />

              <div className="space-y-4 font-serif text-lg">
                {loveLetter.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-foreground/80">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 text-right space-y-2">
                <p className="italic text-muted-foreground">
                  {loveLetter.date}
                </p>
                <p className="text-xl font-serif text-foreground">
                  {loveLetter.signature.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
