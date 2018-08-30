import { binarySearch } from "../src/practice6-solution";
// import { binarySearch } from "../src/practice6";

describe("practice6 - binarySearch", () => {
  test("test", () => {
    expect(binarySearch([2, 6, 7, 90, 103], 90)).toEqual(3);
  });
});
