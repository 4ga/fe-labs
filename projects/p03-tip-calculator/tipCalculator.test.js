import { describe, it, expect } from "vitest";
import { calculateTotals } from "./tipCalculator.js";

describe("tip calculator", () => {
  it("calculates tip and total per person for a standard case", () => {
    const result = calculateTotals(100, 15, 4);

    expect(result.tipAmountPerPerson).toBe(3.75);
    expect(result.totalPerPerson).toBe(28.75);
  });

  it("handles a single person correctly", () => {
    const result = calculateTotals(50, 10, 1);

    expect(result.tipAmountPerPerson).toBe(5);
    expect(result.totalPerPerson).toBe(55);
  });

  it("supports zero tip", () => {
    const result = calculateTotals(80, 0, 2);

    expect(result.tipAmountPerPerson).toBe(0);
    expect(result.totalPerPerson).toBe(40);
  });

  it("rounds monetary values to 2 decimal places", () => {
    const result = calculateTotals(10, 12.5, 3);

    expect(result.tipAmountPerPerson).toBe(0.42);
    expect(result.totalPerPerson).toBe(3.75);
  });

  it("throws if bill amount is negative", () => {
    expect(() => calculateTotals(-10, 10, 2)).toThrow(
      "Bill amount must be greater than or equal to 0"
    );
  });

  it("throws if tip percentage is negative", () => {
    expect(() => calculateTotals(50, -5, 2)).toThrow(
      "Tip percentage must be greater than or equal to 0"
    );
  });

  it("throws if number of people is zero or less", () => {
    expect(() => calculateTotals(50, 10, 0)).toThrow(
      "Number of people must be greater than 0"
    );
  });

  it("throws if input entered is not numeric", () => {
    expect(() => calculateTotals("abc", 10, 5)).toThrow(
      "All Inputs must be valid numbers"
    );
  });
});
