const findMax = require("./findMax");

describe("findMax", () => {
  test("returns undefined for an empty array", () => {
    expect(findMax([])).toBeUndefined();
  });

  test("returns undefined for a non-array input", () => {
    expect(findMax("hello")).toBeUndefined();
    expect(findMax(123)).toBeUndefined();
    expect(findMax({})).toBeUndefined();
  });

  test("returns the maximum value in an array of numbers", () => {
    expect(findMax([3, 5, 1, 2, 4])).toBe(5);
    expect(findMax([-1, -3, -2, -4])).toBe(-1);
    expect(findMax([2.5, 1.2, 3.7, 2.1])).toBeCloseTo(3.7);
  });

  test("returns the maximum value even if it appears multiple times", () => {
    expect(findMax([3, 5, 1, 5, 2, 4])).toBe(5);
  });
});
