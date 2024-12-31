import React from "react";
import Image from "next/image";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <section className="py-20 bg-white/30 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          Our Journey
        </h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 text-right">
                <div className="font-bold text-gray-600 dark:text-gray-300">
                  {event.date}
                </div>
              </div>
              <div className="md:w-3/4 bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>

                <Image
                  src={`https://picsum.photos/seed/${event.date}/400/300`}
                  alt={event.title}
                  width={200}
                  height={200}
                  className="mt-4 rounded-lg w-full max-w-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
