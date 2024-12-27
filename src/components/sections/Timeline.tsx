import React from 'react';
import Image from 'next/image';

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
    <section className="py-20 bg-white/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-300 dark:text-purple-100">Our Journey</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 text-right">
                <div className="font-bold text-purple-300 dark:text-purple-300">{event.date}</div>
              </div>
              <div className="md:w-3/4 bg-purple-50/50 dark:bg-purple-300/20 p-6 rounded-lg shadow-md hover:shadow-purple-200 dark:hover:shadow-purple-700/20 transition-shadow">
                <h3 className="font-bold text-xl mb-2 text-purple-200 dark:text-purple-200">{event.title}</h3>
                <p className="text-purple-400 dark:text-purple-300">{event.description}</p>
                
                <Image 
                  src={`https://picsum.photos/seed/${event.date}/400/300`}
                  alt={event.title} 
                  width={200}
                  height={200}
                  className="mt-4 rounded-lg w-full max-w-md "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
