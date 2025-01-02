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
      startDate: new Date("2011-08-14T00:00:00Z"),
      title: "Since That Mission Trip",
      description:
        "When I spotted you on the bus, not knowing what was ahead 🚌 ✨",
      delay: 0.7,
    },
    {
      startDate: new Date("2012-01-04T00:00:00Z"),
      title: "Since Our Story Began",
      description: "From mission teammates to something more special ❤️ 💫",
      delay: 0.8,
    },
    {
      startDate: new Date("2015-01-03T00:00:00Z"),
      title: "Since Our Mountain-Top 'I Do'",
      description: "When we promised forever in the mountains of Copán 🏔️ 💍",
      delay: 0.9,
    },
  ];

  return (
    <section className="space-y-8 px-4 py-12">
      <div className="text-center space-y-6 mb-12">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            Our Adventure Together
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From shy glances on a mission trip to mountain-top vows, here&apos;s
            how long we&apos;ve been on this amazing journey! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
          {counters.map((counter) => (
            <div
              key={counter.title}
              className="text-center p-2 rounded-lg bg-card/50 dark:bg-gray-800/50"
            >
              <dt className="font-medium text-muted-foreground">
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
