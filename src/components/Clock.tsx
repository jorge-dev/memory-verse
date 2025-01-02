"use client";

import React, { useState, useEffect } from "react";
import { FlipCard } from "./FlipDigit";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex gap-2">
        <FlipCard digit={parseInt(hours[0])} />
        <FlipCard digit={parseInt(hours[1])} />
      </div>
      <div className="text-4xl font-bold text-foreground dark:text-white">
        :
      </div>
      <div className="flex gap-2">
        <FlipCard digit={parseInt(minutes[0])} />
        <FlipCard digit={parseInt(minutes[1])} />
      </div>
      <div className="text-4xl font-bold text-foreground dark:text-white">
        :
      </div>
      <div className="flex gap-2">
        <FlipCard digit={parseInt(seconds[0])} />
        <FlipCard digit={parseInt(seconds[1])} />
      </div>
    </div>
  );
};
