import { describe, it, expect } from "vitest";
import { calculateTimeElapsed, TimeElapsed } from "./dateUtils";

describe("calculateTimeElapsed", () => {
  it("should correctly calculate the time elapsed between two dates", () => {
    const startDate = new Date("2020-01-01T00:00:00Z");
    const endDate = new Date("2023-01-01T00:00:00Z");

    const expected: TimeElapsed = {
      years: 3,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    const [result, error] = calculateTimeElapsed(startDate, endDate);
    expect(error).toBeNull();
    expect(result).toEqual(expected);
  });

  it("should return an error if the end date is before the start date", () => {
    const startDate = new Date("2023-01-01T00:00:00Z");
    const endDate = new Date("2020-01-01T00:00:00Z");

    const [result, error] = calculateTimeElapsed(startDate, endDate);
    expect(result).toBeNull();
    expect(error).toEqual(new Error("End date is before start date"));
  });

  it("should correctly calculate the time elapsed for partial years, months, days, hours, minutes, and seconds", () => {
    const startDate = new Date("2020-01-01T00:00:00Z");
    const endDate = new Date("2023-06-15T12:30:45Z");

    const expected: TimeElapsed = {
      years: 3,
      months: 5,
      days: 15,
      hours: 12,
      minutes: 30,
      seconds: 45,
    };

    const [result, error] = calculateTimeElapsed(startDate, endDate);
    expect(error).toBeNull();
    expect(result).toEqual(expected);
  });
});
