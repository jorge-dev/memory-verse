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
  Bus,
  Heart,
  MessagesSquare,
  Mountain,
  Smile,
  Plane,
  Camera,
  Palmtree,
  MapPin,
  Plus,
  HeartHandshake,
  GemIcon,
  type LucideIcon,
  Baby,
  Shrub,
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

const weddingImages = Array.from(
  { length: 34 },
  (_, i) => `2015 - ${i + 1} of 84.jpeg`
);

const honeymoonImages = Array.from(
  { length: 24 },
  (_, i) => `2015 - ${i + 35} of 84.jpeg`
);

const reunitedCanadaImages = Array.from(
  { length: 24 },
  (_, i) => `2015 - ${i + 60} of 84.jpeg`
);

const timelineEvents: TimelineEvent[] = [
  {
    date: "Summer 2011",
    title: "Mission Trip Romance",
    description:
      "Spotted you on the bus with your friend - that girl across the aisle would change my life forever! 😊 After a week of stolen glances, I finally got the courage to talk to you. Turned out we made an amazing mission team! 🙌",
    icon: Bus,
    images: getByYear(2011)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Summer 2012",
    title: "More Than Mission Mates",
    description:
      "Those mission trip conversations turned into something special. Im glad I replied to your message that January! 💌",
    icon: Heart,
    images: getByYear(2012)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Summer 2013",
    title: "Our Last Mission Trip, But Not Our Last Adventure",
    description:
      "Our last mission trip together, but the beginning of a lifetime of adventures! 🌍",
    icon: MessagesSquare,
    images: getByYear(2013)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: " Summer 2014",
    title: "We're Engaged!",
    description:
      "The day you got down on one knee and asked me to be yours forever! 💍",
    icon: GemIcon,
    images: getByYear(2014)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Winter 2015",
    title: "Mountain-Top Magic",
    description:
      "Said our 'I dos' with the mountains as our backdrop. The view was amazing, but you were even more breathtaking! 🏔️",
    icon: Mountain,
    images: getByNames(weddingImages)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Spring 2015",
    title: "Honeymoon Heaven",
    description:
      "Our honeymoon was the perfect start to our married life. Every moment was pure bliss! 🌴",
    icon: Palmtree,
    images: getByNames(honeymoonImages)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Fall 2015",
    title: "Reunited in Canada",
    description:
      "After months of long-distance, we were finally reunited in Canada. Every moment was worth the wait! 🍁",
    icon: Plane,
    images: getByNames(reunitedCanadaImages)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2016",
    title: "Our First Year of Marriage",
    description:
      "Our first year of marriage was full of ups and downs, but we faced it all together! 💕",
    icon: Heart,
    images: getByYear(2016)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2017",
    title: "Traveling the World (or i guess just the US and Canada lol 😂)",
    description:
      "From road trips to flights, we traveled the world together! 🌎",
    icon: MapPin,
    images: getByYear(2017)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2018",
    title: "Emma's Arrival",
    description:
      "The day our little Emmy was born was the best day of our lives(so far)! 👶",
    icon: Baby,
    images: getByYear(2018)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2019",
    title: "Having fun with our little but mighty family",
    description:
      "From family trips to movie nights, every moment with you and Emma is a treasure! 💖",
    icon: Smile,
    images: getByYear(2019)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2020",
    title: "Surviving 2020 with the help of our wonderful Harputicus ",
    description:
      "2020 was challenging, but it gave us precious time to bond with our beautiful baby Harper! 🎉",
    icon: Heart,
    images: getByYear(2020)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2021",
    title: "Our Little Family is Growing",
    description:
      "Our family is growing, and so is our love! Every day with you is a blessing. 🌟",
    icon: Shrub,
    images: getByYear(2021)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2022",
    title: "Another miracle on the way",
    description:
      "We welcomed our miracle baby Hazel! Our hearts are overflowing with love and gratitude. 👶",
    icon: Baby,
    images: getByYear(2022)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2023",
    title: "A year of new beginnings",
    description:
      "Life became more stable and we created so many fun memories together! 💖",
    icon: Camera,
    images: getByYear(2023)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "2024",
    title: "Another year of love and laughter",
    description:
      "Every day with you is a blessing. I love you more than words can say. 💕",
    icon: Heart,
    images: getByYear(2024)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random()),
  },
  {
    date: "Present day",
    title: "Our Beautiful Complete Family",
    description:
      "Our family is complete with our three beautiful children. Every day is filled with love, laughter, and new adventures! 💕",
    icon: HandHeart,
    images: getByYear(2024)
      .map((image) => image.url)
      .sort(() => 0.5 - Math.random())
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
