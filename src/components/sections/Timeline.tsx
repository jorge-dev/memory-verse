"use client";
import React, { useState } from "react";
// import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
import {
  Heart,
  MessagesSquare,
  Mountain,
  Smile,
  Camera,
  Palmtree,
  Plus,
  HeartHandshake,
  GemIcon,
  type LucideIcon,
  Baby,
  HandHeart,
} from "lucide-react";
import { ImageStack } from "@/components/ImageStack";
import { getByYear, getByNames } from "../../data/images";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
  images: string[];
}

const weddingImageGallery = Array.from(
  { length: 34 },
  (_, i) => `2015 - ${i + 1} of 84.jpeg`
);

const memorableMoments = Array.from(
  { length: 24 },
  (_, i) => `2015 - ${i + 35} of 84.jpeg`
);

const timelineEvents: TimelineEvent[] = [
  {
    date: "Spring 2011",
    title: "That Perfect Spring Afternoon",
    description:
      "Our eyes first met across the café. The sunlight caught your smile, and my heart skipped a beat. ☕",
    icon: Heart,
    images: getByYear(2011)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Summer 2012",
    title: "Dancing Under the Stars",
    description:
      "Our first date was magical - we danced under the stars and felt like the only two people in the world! ✨",
    icon: Heart,
    images: getByYear(2012)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2013-2014",
    title: "Growing Love",
    description:
      "Each day brought us closer, making ordinary moments feel extraordinary. 💕",
    icon: MessagesSquare,
    images: getByYear(2013)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Winter 2014",
    title: "The Perfect Proposal",
    description:
      "Under a sky full of stars, you made me the happiest person alive! 💍",
    icon: GemIcon,
    images: getByYear(2014)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Spring 2015",
    title: "Our Wedding By The Ocean",
    description:
      "Standing there, promising forever to each other while the waves crashed behind us. 🌊",
    icon: Mountain,
    images: getByNames(weddingImageGallery)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Summer 2015",
    title: "Honeymoon Adventures",
    description:
      "Starting our greatest adventure together as husband and wife! 🌅",
    icon: Palmtree,
    images: getByNames(memorableMoments)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2016-2017",
    title: "Building Our Life Together",
    description:
      "Every day brought new adventures and deeper love as we built our home together. 🏠",
    icon: Heart,
    images: getByYear(2016)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2019",
    title: "Our Little Miracle",
    description:
      "The day our first little one came into our lives changed everything. A new chapter of pure joy began! 👶",
    icon: Baby,
    images: getByYear(2019)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2020",
    title: "First Steps and Giggles",
    description:
      "Watching our baby grow and discover the world brings endless joy! 🎀",
    icon: Smile,
    images: getByYear(2020)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2021",
    title: "Growing Family",
    description:
      "Our second bundle of joy arrived, doubling our happiness and love! 🎀",
    icon: Baby,
    images: getByYear(2021)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2022",
    title: "Double the Fun",
    description:
      "Two little ones, twice the adventures, and countless precious moments! 💝",
    icon: Heart,
    images: getByYear(2022)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2023",
    title: "Family Adventures",
    description: "Making memories together, one adventure at a time! 💫",
    icon: Camera,
    images: getByYear(2023)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2024",
    title: "Growing Together",
    description: "Every day brings new joys as our family grows in love! ❤️",
    icon: HandHeart,
    images: getByYear(2024)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
];

export function Timeline() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [visibleItems, setVisibleItems] = useState(3);

  const showMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + 3, timelineEvents.length));
  };

  return (
    <section className="space-y-8 px-4 py-12" suppressHydrationWarning>
      <div className="text-center space-y-6 mt-[8vh] mb-12">
        <div className="space-y-6">
          <h1 className="scroll-m-20 text-5xl md:text-7xl mb-4 font-extrabold tracking-tight lg:text-5xl text-foreground">
            Our Journey
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            From mission fields to married life, every moment tells our story!
            🚀
          </p>
        </div>
      </div>

      <VerticalTimeline lineColor={isDark ? "#4B5563" : "#D1D5DB"}>
        {timelineEvents.slice(0, visibleItems).map((event, index) => (
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            key={index}
            className="vertical-timeline-element--work"
            date={event.date}
            dateClassName={`${
              isDark ? "text-gray-300" : "text-gray-600"
            } font-medium`}
            contentStyle={{
              background: isDark
                ? "rgba(31, 41, 55, 0.5)"
                : "rgba(233, 234, 236, 0.5)", // Changed to lighter gray
              color: isDark ? "#fff" : "#1f2937",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
            }}
            contentArrowStyle={{
              borderRight: isDark
                ? "20px solid rgba(31, 41, 55, 0.5)"
                : "20px solid rgba(240, 240, 240, 0.5)", // Changed to lighter gray
            }}
            icon={<event.icon size={20} />}
            iconStyle={{
              background: isDark ? "#374151" : "#f3f4f6", // Changed to lighter gray
              color: isDark ? "#fff" : "#1f2937",
            }}
          >
            <h3 className="font-bold text-xl mb-2 text-foreground">
              {event.title}
            </h3>
            <p
              className={`${
                isDark ? "text-gray-300" : "text-gray-600"
              } text-lg`}
            >
              {event.description}
            </p>
            <div className="mt-4">
              <ImageStack
                images={event.images}
                title={event.title}
                maxDisplay={3}
              />
            </div>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{
            background: isDark ? "#374151" : "#fff",
            color: isDark ? "#fff" : "#1f2937",
            cursor:
              visibleItems < timelineEvents.length ? "pointer" : "default",
          }}
          icon={
            visibleItems < timelineEvents.length ? (
              <Plus size={20} />
            ) : (
              <HeartHandshake size={20} />
            )
          }
          iconOnClick={
            visibleItems < timelineEvents.length ? showMoreItems : undefined
          }
        />
      </VerticalTimeline>
    </section>
  );
}
