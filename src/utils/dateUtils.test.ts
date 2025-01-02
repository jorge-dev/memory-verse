import { describe, it, expect } from "vitest";
import { calculateTimeElapsed, TimeElapsed } from "./dateUtils";

describe("calculateTimeElapsed", () => {
  it("should correctly calculate the time elapsed between two dates in UTC", () => {
    const startDate = new Date(Date.UTC(2020, 0, 1, 0, 0, 0));
    const endDate = new Date(Date.UTC(2023, 0, 1, 0, 0, 0));

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
    const startDate = new Date(Date.UTC(2023, 0, 1));
    const endDate = new Date(Date.UTC(2020, 0, 1));

    const [result, error] = calculateTimeElapsed(startDate, endDate);
    expect(result).toBeNull();
    expect(error).toEqual(new Error("End date is before start date"));
  });

  it("should correctly calculate partial time units in UTC", () => {
    const startDate = new Date(Date.UTC(2020, 0, 1, 0, 0, 0));
    const endDate = new Date(Date.UTC(2023, 5, 15, 12, 30, 45));

    const expected: TimeElapsed = {
      years: 3,
      months: 5,
      days: 14,
      hours: 12,
      minutes: 30,
      seconds: 45,
    };

    const [result, error] = calculateTimeElapsed(startDate, endDate);
    expect(error).toBeNull();
    expect(result).toEqual(expected);
  });

  it("should be timezone independent", () => {
    // Create two identical time differences in different timezone offsets
    const startDate1 = new Date(Date.UTC(2023, 0, 1, 0, 0, 0));
    const endDate1 = new Date(Date.UTC(2023, 0, 2, 0, 0, 0));
    
    const startDate2 = new Date(Date.UTC(2023, 0, 1, 12, 0, 0));
    const endDate2 = new Date(Date.UTC(2023, 0, 2, 12, 0, 0));

    const [result1] = calculateTimeElapsed(startDate1, endDate1);
    const [result2] = calculateTimeElapsed(startDate2, endDate2);

    expect(result1).toEqual(result2);
  });
});
