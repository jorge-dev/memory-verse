"use client";

export function YearDivider({ year }: { year: number }) {
  return (
    <div
      id={`year-${year}`}
      className="col-span-full flex items-center gap-4 my-6"
    >
      <h2 className="text-2xl font-semibold">{year}</h2>
      <div className="h-px flex-grow bg-border" />
    </div>
  );
}
