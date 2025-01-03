"use client";
import { ModeToggle } from "@/components/DarkModeToggle";
import { HeroSection } from "@/components/sections/HeroSection";
import { Timeline } from "@/components/sections/Timeline";
import { LoveReasons } from "@/components/sections/LoveReasons";
import { LoveLetter } from "@/components/sections/LoveLetter";
import { MemoryLane } from "@/components/sections/MemoryLane";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LoveCounters } from "@/components/sections/LoveCounters";

const footerData = {
  message:
    "To my beloved Rebekah, who makes every day of my life more beautiful than I could have ever imagined.",
  signature: "With all my love, Jorge",
};

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative bg-background dark:bg-background-dark text-foreground dark:text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <HeroSection
        title="A Journey of Love"
        subtitle="Our Story Through the Years"
      />
      <AnimatedSection delay={0.3}>
        <LoveCounters />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <Timeline />
      </AnimatedSection>

      {/* <AnimatedSection delay={0.3}> */}
      <MemoryLane />
      {/* </AnimatedSection> */}

      {/* <AnimatedSection delay={0.3}> */}
      <LoveReasons />
      {/* </AnimatedSection> */}

      <AnimatedSection delay={0.2}>
        <LoveLetter />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <Footer {...footerData} />
      </AnimatedSection>
    </main>
  );
}
