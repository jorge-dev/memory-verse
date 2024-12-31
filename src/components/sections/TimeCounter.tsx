"use client";

import React, { useEffect, useState } from "react";

interface TimeCounterProps {
  startDate: Date;
}

export function TimeCounter({ startDate }: TimeCounterProps) {
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeElapsed(`${days} days, ${hours} hours, ${minutes} minutes`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <section className="py-20 bg-white/30 dark:bg-gray-800/30">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl mb-6">Together Since</h2>
        <div className="text-4xl font-bold">{timeElapsed}</div>
      </div>
    </section>
  );
}
