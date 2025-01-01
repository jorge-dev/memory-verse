"use client";
import { ModeToggle } from "@/components/DarkModeToggle";
import { HeroSection } from "@/components/sections/HeroSection";
import { TimeCounter } from "@/components/sections/TimeCounter";
import { Timeline } from "@/components/sections/Timeline";
import { LoveReasons } from "@/components/sections/LoveReasons";
import { LoveLetter } from "@/components/sections/LoveLetter";
import { MemoryLane } from "@/components/sections/MemoryLane";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
import { AnimatedSection } from "@/components/AnimatedSection";
const timelineEvents = [
  {
    date: "June 2013",
    title: "Our First Meeting",
    description:
      "The day that changed everything when we first met at the coffee shop.",
  },
  {
    date: "December 2013",
    title: "First Date",
    description:
      "Our magical first date at the local park, followed by dinner.",
  },
  {
    date: "February 2014",
    title: "Official Couple",
    description:
      "The day we decided to make it official and start our journey together.",
  },
  {
    date: "June 2015",
    title: "Moving In Together",
    description: "Taking the next step and creating our first home together.",
  },
  {
    date: "September 2016",
    title: "The Proposal",
    description:
      "A perfect sunset, a beautiful ring, and a 'Yes' that changed our lives.",
  },
];

const loveReasons = [
  {
    title: "Your Smile",
    description: "The way you light up any room with your beautiful smile.",
  },
  {
    title: "Your Kindness",
    description:
      "How you always think of others and spread joy wherever you go.",
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

const memories = [
  {
    id: 1,
    image: "https://picsum.photos/seed/memory1/800/600",
    date: "Summer 2013",
    title: "Our First Vacation",
    description:
      "Remember that spontaneous road trip to the beach? We got lost but found the most amazing sunset spot.",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/memory2/800/600",
    date: "Winter 2014",
    title: "First Christmas Together",
    description:
      "You surprised me with matching ugly sweaters. I still have mine!",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/memory3/800/600",
    date: "Spring 2015",
    title: "The Garden Project",
    description:
      "When we decided to grow our own vegetables. The tomatoes never made it, but our love grew stronger!",
  },
];

const loveLetter = {
  content: `My Dearest,\n\nAs I sit here writing this letter, I can't help but smile thinking about all the wonderful moments we've shared together. From our first awkward date to our most recent adventure, every moment with you has been a blessing.\n\nYou've been my best friend, my biggest supporter, and my greatest love. Your smile still makes my heart skip a beat, just like it did when we first met.\n\nHere's to many more years of laughter, love, and creating beautiful memories together.`,
  signature: "Forever Yours,\nMe",
  date: "June 2023",
};

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
    <main className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <HeroSection
        title="A Journey of Love"
        subtitle="Our Story Through the Years"
      />

      <div className="flex flex-col space-y-8 px-4 py-12">
        <AnimatedSection delay={0.2}>
          <TimeCounter
            startDate={new Date("2011-08-14T00:00:00Z")}
            title="Since We First Met"
            description="The day our story began"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <TimeCounter
            startDate={new Date("2012-01-04T00:00:00Z")}
            title="Since We Started Dating"
            description="When friendship turned to love"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <TimeCounter
            startDate={new Date("2015-01-03T00:00:00Z")}
            title="Since We Got Married"
            description="The day we said 'I do'"
          />
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <Timeline events={timelineEvents} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <MemoryLane memories={memories} />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <LoveReasons reasons={loveReasons} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <LoveLetter {...loveLetter} />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <Footer {...footerData} />
      </AnimatedSection>
    </main>
  );
}
