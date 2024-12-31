export interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateTimeElapsed(startDate: Date, endDate: Date = new Date()): [TimeElapsed | null, Error | null] {
  if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
    return [null, new Error("Invalid date provided")];
  }

  if (endDate < startDate) {
    return [null, new Error("End date is before start date")];
  }

  const diff = endDate.getTime() - startDate.getTime();

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const result: TimeElapsed = { years, months, days, hours, minutes, seconds };

  return [result, null];
}
