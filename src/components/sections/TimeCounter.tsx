"use client";

interface TimeCounterProps {
  startDate: Date;
}

export function TimeCounter({ startDate }: TimeCounterProps) {
  return (
    <section className="py-20 bg-white/30 dark:bg-gray-800/30">
      <div className="container mx-auto text-center">
        <div>
          <h2 className="text-4xl font-bold text-white dark:text-gray-100">
            Time Counter
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-400">
            This is a simple time counter that shows the time elapsed since the
            start date.
          </p>
          {/* use the date */}
          <p className="text-6xl font-bold text-white dark:text-gray-100">
            {startDate.getTime()}
          </p>
        </div>
      </div>
    </section>
  );
}
