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

As I sit to write this, my heart overflows with gratitude and joy as I think about that mission trip back in 2011. I remember the exact moment I saw you on that bus, laughing with your friend. Little did I know that God was setting the stage for a story far more beautiful than I could have imagined.

That second week, when we began to truly talk, remains one of my most cherished memories. The way we connected while serving others was just the beginning of something extraordinary. Who could have foreseen that those simple moments would lead us to this incredible life together?

I will never forget the day we stood together in 2015, on that mountain in Copán, exchanging vows. The beauty of the view paled in comparison to the beauty of your presence in that moment. It was not just a promise—it was the beginning of a journey that has blessed me in ways words can barely express.

Since then, our lives have been enriched by the arrival of our three beautiful daughters—our joyful 2018 miracle, our curious 2020 adventurer, and our sweet 2022 light. Watching you as their mother has revealed a depth of love and strength in you that amazes me every single day. The warmth and care you pour into our family have made our house a home filled with love and laughter.

Every moment with you—whether it’s bedtime stories with the girls, chaotic breakfast mornings, or quiet evenings on the couch—is a treasure I hold close. You make the ordinary extraordinary and turn every day into a blessing.

As I look to the future, my heart is filled with anticipation for the adventures and milestones that await us. With you by my side, I know that every step of the journey will be full of love and meaning.
`,
  signature: "Forever Yours,\nJorge",
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
