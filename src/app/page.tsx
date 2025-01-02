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

const timelineEvents = [
  {
    date: "August 2011",
    title: "First Week of Mission Trip",
    description:
      "Spotted you on the bus with your friend. Little did I know that girl across the aisle would change my life forever! 😊",
  },
  {
    date: "August 2011",
    title: "Second Week Magic",
    description:
      "Finally got the courage to actually talk to you. Turned out we made an amazing mission team! 🙌",
  },
  {
    date: "January 2012",
    title: "More Than Mission Mates",
    description:
      "Those mission trip conversations turned into something special. Best 'yes' ever! ❤️",
  },
  {
    date: "January 2015",
    title: "Mountain-Top Magic",
    description:
      "Said our 'I dos' with the mountains as our backdrop. The view was amazing, but you were even more breathtaking! 🏔️",
  },
  {
    date: "Present Day",
    title: "Still Going Strong",
    description:
      "From mission fields to married life, every day's an adventure with you! 💕",
  },
];

const loveReasons = [
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

const memories = [
  {
    id: 1,
    image: "https://picsum.photos/seed/memory1/800/600",
    date: "August 2011",
    title: "The Mission Trip Beginning",
    description:
      "That first glimpse of you on the bus. Who knew God had such amazing plans in store? 🙏",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/memory2/800/600",
    date: "January 2012",
    title: "When Everything Changed",
    description:
      "From mission partners to life partners - best upgrade ever! 🎉",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/memory3/800/600",
    date: "January 2015",
    title: "Mountain-Top Promises",
    description:
      "Our wedding day in the mountains - pretty sure we were literally on cloud nine! ⛰️",
  },
];

const loveLetter = {
  content: `Hey Love! ❤️\n\nYou know what I was thinking about today? That mission trip that changed everything. I still remember seeing you on that bus with your friend, having no idea that God was about to write the most amazing story.\n\nThat second week when we finally started talking... who knew serving together would lead to this incredible journey? From mission teammates to soulmates, every step has been a blessing.\n\nRemember when our friendship turned into something more? And then there we were, saying our vows on that mountain top (literally the high point of my life 😉).\n\nEvery day since has been an adventure, and I wouldn't want anyone else by my side. From more mission work to morning coffee, from mountain peaks to movie nights, you make everything better.\n\nCan't wait for all the adventures still ahead of us!`,
  signature: "Forever Yours,\nJorge",
  date: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  }),
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
      <AnimatedSection delay={0.6}>
        <LoveCounters />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <Timeline events={timelineEvents} />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
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
