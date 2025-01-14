"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { TimeCounter } from "./TimeCounter";

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
};

export function LoveCounters() {
  const counters = [
    {
      startDate: new Date("2011-03-15T00:00:00Z"),
      title: "Since Our First Meeting",
      description: "When fate brought us together at that sunset cafe ☕ ✨",
      delay: 0.7,
    },
    {
      startDate: new Date("2012-06-20T00:00:00Z"),
      title: "Since Our First Date",
      description: "That magical evening under the stars 🌟 💫",
      delay: 0.8,
    },
    {
      startDate: new Date("2015-04-15T00:00:00Z"),
      title: "Since Our Wedding Day",
      description: "When we promised forever to each other 🌊 💍",
      delay: 0.9,
    },
  ];

  return (
    <section className="space-y-8 px-4 py-12">
      <div className="text-center space-y-6 mt-[8vh] mb-12">
        <div className="space-y-6">
          <h1 className="scroll-m-20 text-5xl md:text-7xl  mb-4 font-extrabold tracking-tight lg:text-5xl text-foreground">
            Our Adventure Together
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            From chance encounters to cherished memories, celebrating every
            moment of our beautiful journey! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
          {counters.map((counter) => (
            <div
              key={counter.title}
              className="text-center p-2 rounded-lg bg-card/50 dark:bg-gray-800/50"
            >
              <dt className="font-medium ">
                {counter.title.replace("Since ", "")}
              </dt>
              <dd className="font-bold text-foreground">
                {formatDate(counter.startDate)}
              </dd>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-8">
        {counters.map((counter) => (
          <AnimatedSection key={counter.title} delay={counter.delay}>
            <TimeCounter
              startDate={counter.startDate}
              title={counter.title}
              description={counter.description}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
