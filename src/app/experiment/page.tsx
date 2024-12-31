"use client";

import { TimeCounter } from "@/components/sections/TimeCounter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect } from "react";
import Lenis from "lenis";
import { Clock } from "@/components/clock";
import { ModeToggle } from "@/components/dark-mode-toggle";

interface ExperimentalFeature {
  title: string;
  description: string;
  component: React.ReactNode;
}

export default function ExperimentPage() {
  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const experimentalFeatures: ExperimentalFeature[] = [
    {
      title: "Flip Clock Animation",
      description: "A smooth flipping animation for time display",
      component: <Clock />,
    },
    {
      title: "Time Counter",
      description: "Tracks time since a specific date",
      component: <TimeCounter startDate={new Date("2024-01-01")} />,
    },
  ];

  return (
    <main className="relative  from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 space-y-6">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <header className="container mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Experimental Features
        </h1>
        <p className="text-muted-foreground">
          A playground for testing new components and animations
        </p>
      </header>

      <section className="container mx-auto bg-white/30 dark:bg-gray-800/30">
        {experimentalFeatures.map((feature, index) => (
          <AnimatedSection key={feature.title} delay={0.2 * index}>
            <div className="border border-border rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {feature.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <div className=" rounded-md p-4">{feature.component}</div>
            </div>
          </AnimatedSection>
        ))}
      </section>
    </main>
  );
}
