import uniqSort from "../src/practice1-solution";
// import uniqSort from "../src/practice1";

describe("Practice 1 - UniqSort", () => {
  test("test 1", () => {
    expect(uniqSort([4, 2, 2, 3, 2, 2, 2])).toEqual([2, 3, 4]);
  });

  test("test 2", () => {
    expect(uniqSort([1, 5, 2, 1])).toEqual([1, 2, 5]);
  });
});
