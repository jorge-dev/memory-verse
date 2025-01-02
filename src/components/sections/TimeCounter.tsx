"use client";

import { useEffect, useState, memo } from "react";
import { FlipCard } from "@/components/FlipDigit";
import { calculateTimeElapsed, TimeElapsed } from "@/utils/dateUtils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TimeCounterProps {
  startDate: Date;
  title?: string;
  description?: string;
}

const MemoizedFlipCard = memo(FlipCard);

const TimeUnit = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex gap-1">
      <MemoizedFlipCard digit={Math.floor(value / 10)} />
      <MemoizedFlipCard digit={value % 10} />
    </div>
    <span className="text-sm text-muted-foreground font-medium">{label}</span>
  </div>
));
TimeUnit.displayName = "TimeUnit";

export function TimeCounter({
  startDate,
  title = "Time Together",
  description = "Every second with you has been a blessing",
}: TimeCounterProps) {
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

  const Separator = () => (
    <div className="flex items-center h-full">
      <span className="text-2xl font-bold text-muted-foreground -mt-4">:</span>
    </div>
  );

  return (
    <Card className="border-none bg-white/30 dark:bg-gray-800/30 max-w-6xl mx-auto w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <TimeUnit value={timeElapsed.years} label="Years" />
          <Separator />
          <TimeUnit value={timeElapsed.months} label="Months" />
          <Separator />
          <TimeUnit value={timeElapsed.days} label="Days" />
          <Separator />
          <TimeUnit value={timeElapsed.hours} label="Hours" />
          <Separator />
          <TimeUnit value={timeElapsed.minutes} label="Minutes" />
          <Separator />
          <TimeUnit value={timeElapsed.seconds} label="Seconds" />
        </div>
      </CardContent>
    </Card>
  );
}
