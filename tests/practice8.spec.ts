import { mergeSort } from "../src/practice8-solution";
// import { mergeSort } from "../src/practice8";

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("practice8 - mergeSort", () => {
  test("test1", () => {
    expect(mergeSort(arrayRandom)).toEqual(answer);
  });

  test("test2", () => {
    expect(mergeSort(arrayOrdered)).toEqual(answer);
  });

  test("test3", () => {
    expect(mergeSort(arrayReversed)).toEqual(answer);
  });
});
