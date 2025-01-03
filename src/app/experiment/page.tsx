"use client";

// import { TimeCounter } from "@/components/sections/TimeCounter";
import { useEffect } from "react";
import Lenis from "lenis";
import { ModeToggle } from "@/components/DarkModeToggle";
// import { Clock } from "@/components/Clock";
import { Timeline } from "@/components/sections/Timeline";
import { MemoryLane } from "@/components/sections/MemoryLane";

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
    // {
    //   title: "Flip Clock Animation",
    //   description: "A smooth flipping animation for time display",
    //   component: <Clock />,
    // },
    // {
    //   title: "Time Counter",
    //   description: "Tracks time since a specific date",
    //   component: (
    //     <TimeCounter
    //       startDate={new Date("2015-01-03T00:00:00Z")}
    //       title="Time Since Launch"
    //       description="Tracking our journey from the beginning"
    //     />
    //   ),
    // },
    {
      title: "Timeline",
      description: "A vertical timeline of important events",
      component: <Timeline />,
    },
    {
      title: "Memory Lane",
      description: "A slideshow of memories",
      component: <MemoryLane />,
    },
  ];

  return (
    <main className="relative   p-6 space-y-6">
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

      <section className="container mx-auto ">
        {experimentalFeatures.map((feature) => (
          <div
            key={feature.title}
            className="border border-border rounded-lg p-6 mb-6"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {feature.title}
            </h2>
            <p className="text-muted-foreground mb-4">{feature.description}</p>
            <div className=" rounded-md p-4">{feature.component}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
