"use client";
import { HeroSection } from "@/components/sections/HeroSection";
import { Timeline } from "@/components/sections/Timeline";
import { LoveReasons } from "@/components/sections/LoveReasons";
import { LoveLetter } from "@/components/sections/LoveLetter";
import { MemoryLane } from "@/components/sections/MemoryLane";
import { Footer } from "@/components/sections/Footer";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LoveCounters } from "@/components/sections/LoveCounters";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative bg-background dark:bg-background-dark text-foreground dark:text-foreground">
      {isClient && (
        <>
          <HeroSection />

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

          {/* <AnimatedSection delay={0.2}> */}
          <LoveLetter />
          {/* </AnimatedSection> */}

          <AnimatedSection delay={0.3}>
            <Footer />
          </AnimatedSection>
        </>
      )}
    </main>
  );
}
