import { makeChange } from "../src/practice9-solution";
// import { makeChange } from "../src/practice9";

describe("practice9 - makeChange", () => {
  test("test 1", () => {
    expect(makeChange([5, 10, 25], 50)).toEqual(2);
  });

  test("test 2", () => {
    expect(makeChange([5, 10, 25], 40)).toEqual(3);
  });

  test("test 3", () => {
    expect(makeChange([5, 10, 25], 35)).toEqual(2);
  });
});
