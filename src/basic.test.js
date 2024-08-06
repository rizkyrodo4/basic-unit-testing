import { describe, it, expect } from "vitest";
import { sumAndPlusTen, maxNum, factorial } from "./basic";

describe("sumAndPlusTen", () => {
  it("should return the sum of a + b + 10 when a, b is integer", () => {
    // AAA Pattern
    // Arrange - Set up the test
    const a = 5;
    const b = 10;

    // Act - Execute the test
    const result = sumAndPlusTen(a, b);

    // Assert - Check the result
    expect(result).toBe(25);
  });

  it("should return NaN if any of the paramaters is not provided", () => {
    const a = 5;
    const b = 10;

    const result = sumAndPlusTen();

    expect(result).toBe(NaN);
  });
});

describe("maxNum", () => {
  it("should return the second argument when it is greater", () => {
    expect(maxNum(5, 10)).toBe(10);
  });

  it("should return the first argument when it is greater", () => {
    expect(maxNum(50, 1)).toBe(50);
  });

  it("should return the first argument when both arguments are equal", () => {
    expect(maxNum(5, 5)).toBe(5);
  });

  it("should throw an error if one of the arguments is not a number", () => {
    expect(() => maxNum(5, "10")).toThrowError(
      "All of the arguments must be a number!"
    );
  });
});

describe("factorial", () => {
  it("should return 1 when the input is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 when the input is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 3628800 when the input is 10", () => {
    expect(factorial(10)).toBe(3_628_800);
  });

  it("should throw error if the input is negative number", () => {
    expect(() => factorial(-10)).toThrowError(
      "Number must be a positive integer!"
    );
  });

  it("should return 788657867364790503552363213932185062295135977687173263294742533244359449963403342920304284011984623904177212138919638830257642790242637105061926624952829931113462857270763317237396988943922445621451664240254033291864131227428294853277524242407573903240321257405579568660226031904170324062351700858796178922222789623703897374720000000000000000000000000000000000000000000000000 if the input is 200", () => {
    expect(factorial(200)).toBe(
      788657867364790503552363213932185062295135977687173263294742533244359449963403342920304284011984623904177212138919638830257642790242637105061926624952829931113462857270763317237396988943922445621451664240254033291864131227428294853277524242407573903240321257405579568660226031904170324062351700858796178922222789623703897374720000000000000000000000000000000000000000000000000
    );
  });
});
