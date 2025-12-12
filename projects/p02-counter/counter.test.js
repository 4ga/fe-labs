import { describe, it, expect } from "vitest";
import { createCounter } from "./counter.js";

describe("counter", () => {
  it("default initial value is 0", () => {
    const counter = createCounter();
    expect(counter.getValue()).toBe(0);
  });

  it("Uses provided initial value", () => {
    const counter = createCounter(10);
    expect(counter.getValue()).toBe(10);
  });

  it("increment increases value by 1", () => {
    const counter = createCounter(0);
    counter.increment();
    expect(counter.getValue()).toBe(1);
    counter.increment();
    expect(counter.getValue()).toBe(2);
  });

  it("decrement decreases value by 1", () => {
    const counter = createCounter(5);
    counter.decrement();
    expect(counter.getValue()).toBe(4);
    counter.decrement();
    expect(counter.getValue()).toBe(3);
  });

  it("resets sets value back to initialvalue", () => {
    const counter = createCounter(10);
    counter.increment();
    counter.increment();
    counter.reset();
    expect(counter.getValue()).toBe(10);
  });

  it("does not go below 0 when decrementing", () => {
    const counter = createCounter(0);
    counter.decrement();
    expect(counter.getValue()).toBe(0);
  });
});
