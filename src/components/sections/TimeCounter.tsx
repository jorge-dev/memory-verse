"use client";

import { useEffect, useState, memo } from "react";
import { FlipCard } from "../FlipDigit";
import { calculateTimeElapsed, TimeElapsed } from "@/utils/dateUtils";

interface TimeCounterProps {
  startDate: Date;
}

const MemoizedFlipCard = memo(FlipCard);

const TimeUnit = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex gap-1">
      <MemoizedFlipCard digit={Math.floor(value / 10)} />
      <MemoizedFlipCard digit={value % 10} />
    </div>
    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
      {label}
    </span>
  </div>
));
TimeUnit.displayName = "TimeUnit";

export function TimeCounter({ startDate }: TimeCounterProps) {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>(
    calculateTimeElapsed(startDate)[0]!
  );

  useEffect(() => {
    // Update only when a second changes
    const timer = setInterval(() => {
      setTimeElapsed((prev) => {
        const [next, error] = calculateTimeElapsed(startDate);
        if (error) {
          console.error(error);
          return prev;
        }
        // Only update if there's an actual change
        if (
          prev.seconds !== next!.seconds ||
          prev.minutes !== next!.minutes ||
          prev.hours !== next!.hours ||
          prev.days !== next!.days ||
          prev.months !== next!.months ||
          prev.years !== next!.years
        ) {
          return next!;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <section className="py-20 bg-white/30 dark:bg-gray-800/30">
      <div className="container mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground dark:text-gray-100">
              Time Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Every second with you has been a blessing
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <TimeUnit value={timeElapsed.years} label="Years" />
            <TimeUnit value={timeElapsed.months} label="Months" />
            <TimeUnit value={timeElapsed.days} label="Days" />
            <TimeUnit value={timeElapsed.hours} label="Hours" />
            <TimeUnit value={timeElapsed.minutes} label="Minutes" />
            <TimeUnit value={timeElapsed.seconds} label="Seconds" />
          </div>
        </div>
      </div>
    </section>
  );
}
