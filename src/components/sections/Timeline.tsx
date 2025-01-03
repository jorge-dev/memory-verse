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
  Coffee,
  Plane,
  Home,
  Camera,
  Palmtree,
  ChefHat,
  Plus,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { ImageStack } from "@/components/ImageStack";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
  images: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "August 2011",
    title: "First Week of Mission Trip",
    description:
      "Spotted you on the bus with your friend. Little did I know that girl across the aisle would change my life forever! 😊",
    icon: Bus,
    images: [
      `https://picsum.photos/seed/mission1/800/600`,
      `https://picsum.photos/seed/mission2/800/600`,
      `https://picsum.photos/seed/mission3/800/600`,
      `https://picsum.photos/seed/mission4/800/600`,
      `https://picsum.photos/seed/mission5/800/600`,
      `https://picsum.photos/seed/mission6/800/600`,
    ],
  },
  {
    date: "August 2011",
    title: "Second Week Magic",
    description:
      "Finally got the courage to actually talk to you. Turned out we made an amazing mission team! 🙌",
    icon: MessagesSquare,
    images: [
      `https://picsum.photos/seed/mission5/800/600`,
      `https://picsum.photos/seed/mission6/800/600`,
      `https://picsum.photos/seed/mission7/800/600`,
      `https://picsum.photos/seed/mission8/800/600`,
      `https://picsum.photos/seed/mission9/800/600`,
    ],
  },
  {
    date: "January 2012",
    title: "More Than Mission Mates",
    description:
      "Those mission trip conversations turned into something special. Best 'yes' ever! ❤️",
    icon: Heart,
    images: [
      `https://picsum.photos/seed/mission7/800/600`,
      `https://picsum.photos/seed/mission8/800/600`,
      `https://picsum.photos/seed/mission9/800/600`,
      `https://picsum.photos/seed/mission10/800/600`,
      `https://picsum.photos/seed/mission11/800/600`,
    ],
  },
  {
    date: "January 2015",
    title: "Mountain-Top Magic",
    description:
      "Said our 'I dos' with the mountains as our backdrop. The view was amazing, but you were even more breathtaking! 🏔️",
    icon: Mountain,
    images: [
      `https://picsum.photos/seed/mission9/800/600`,
      `https://picsum.photos/seed/mission10/800/600`,
      `https://picsum.photos/seed/mission11/800/600`,
      `https://picsum.photos/seed/mission12/800/600`,
      `https://picsum.photos/seed/mission13/800/600`,
    ],
  },
  {
    date: "Present Day",
    title: "Still Going Strong",
    description:
      "From mission fields to married life, every day's an adventure with you! 💕",
    icon: Smile,
    images: [
      `https://picsum.photos/seed/mission11/800/600`,
      `https://picsum.photos/seed/mission12/800/600`,
      `https://picsum.photos/seed/mission13/800/600`,
      `https://picsum.photos/seed/mission14/800/600`,
      `https://picsum.photos/seed/mission15/800/600`,
    ],
  },
  {
    date: "March 2015",
    title: "First Home Together",
    description:
      "Started our life together in our cozy little apartment. Every meal was an adventure! 🏠",
    icon: Home,
    images: [
      `https://picsum.photos/seed/mission13/800/600`,
      `https://picsum.photos/seed/mission14/800/600`,
      `https://picsum.photos/seed/mission15/800/600`,
      `https://picsum.photos/seed/mission16/800/600`,
      `https://picsum.photos/seed/mission17/800/600`,
    ],
  },
  {
    date: "June 2015",
    title: "European Adventure",
    description:
      "Our first big trip together! Getting lost in Paris was never more romantic. ✈️",
    icon: Plane,
    images: [
      `https://picsum.photos/seed/mission15/800/600`,
      `https://picsum.photos/seed/mission16/800/600`,
      `https://picsum.photos/seed/mission17/800/600`,
      `https://picsum.photos/seed/mission18/800/600`,
      `https://picsum.photos/seed/mission19/800/600`,
    ],
  },
  {
    date: "December 2015",
    title: "Christmas Traditions Begin",
    description:
      "Started our tradition of making tamales together for Christmas. Your family's recipe is now our tradition! 🎄",
    icon: ChefHat,
    images: [
      `https://picsum.photos/seed/mission17/800/600`,
      `https://picsum.photos/seed/mission18/800/600`,
      `https://picsum.photos/seed/mission19/800/600`,
      `https://picsum.photos/seed/mission20/800/600`,
      `https://picsum.photos/seed/mission21/800/600`,
    ],
  },
  {
    date: "Summer 2016",
    title: "Beach Getaway",
    description:
      "That weekend at the beach where we decided to make travel our thing! 🌊",
    icon: Palmtree,
    images: [
      `https://picsum.photos/seed/mission19/800/600`,
      `https://picsum.photos/seed/mission20/800/600`,
      `https://picsum.photos/seed/mission21/800/600`,
      `https://picsum.photos/seed/mission22/800/600`,
      `https://picsum.photos/seed/mission23/800/600`,
    ],
  },
  {
    date: "Fall 2016",
    title: "Photography Phase",
    description:
      "Remember when we thought we could be professional photographers? At least we got some cute pics! 📸",
    icon: Camera,
    images: [
      `https://picsum.photos/seed/mission21/800/600`,
      `https://picsum.photos/seed/mission22/800/600`,
      `https://picsum.photos/seed/mission23/800/600`,
      `https://picsum.photos/seed/mission24/800/600`,
      `https://picsum.photos/seed/mission25/800/600`,
    ],
  },
  {
    date: "January 2017",
    title: "Coffee Shop Dreams",
    description:
      "When we found our favorite coffee shop and dreamed of opening our own someday! ☕",
    icon: Coffee,
    images: [
      `https://picsum.photos/seed/mission23/800/600`,
      `https://picsum.photos/seed/mission24/800/600`,
      `https://picsum.photos/seed/mission25/800/600`,
      `https://picsum.photos/seed/mission26/800/600`,
      `https://picsum.photos/seed/mission27/800/600`,
    ],
  },
  {
    date: "January 2018",
    title: "Coffee Shop Dreams",
    description:
      "When we found our favorite coffee shop and dreamed of opening our own someday! ☕",
    icon: Coffee,
    images: [
      `https://picsum.photos/seed/mission23/800/600`,
      `https://picsum.photos/seed/mission24/800/600`,
      `https://picsum.photos/seed/mission25/800/600`,
      `https://picsum.photos/seed/mission26/800/600`,
      `https://picsum.photos/seed/mission27/800/600`,
    ],
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
    <section className="space-y-8 px-4 py-12">
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
