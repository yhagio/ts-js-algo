import { linearSearch } from "../src/practice5-solution";
// import { linearSearch } from "../src/practice5";

describe("practice5 - linearSearch", () => {
  test("test", () => {
    expect(linearSearch([2, 6, 7, 90, 103], 90)).toEqual(3);
  });
});
