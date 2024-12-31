import React from "react";

interface Reason {
  title: string;
  description: string;
}

interface LoveReasonsProps {
  reasons: Reason[];
}

export function LoveReasons({ reasons }: LoveReasonsProps) {
  return (
    <section className="py-20 bg-white/30 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Reasons Why I Love You
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-md"
            >
              <div className="text-2xl font-bold mb-2">#{index + 1}</div>
              <h3 className="font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
