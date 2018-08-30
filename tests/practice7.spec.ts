import { bubbleSort } from "../src/practice7-solution";
// import { bubbleSort } from "../src/practice7";

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("practice7 - bubbleSort", () => {
  test("test", () => {
    expect(bubbleSort(arrayRandom)).toEqual(answer);
  });

  test("test 2", () => {
    expect(bubbleSort(arrayOrdered)).toEqual(answer);
  });

  test("test 3", () => {
    expect(bubbleSort(arrayReversed)).toEqual(answer);
  });
});
