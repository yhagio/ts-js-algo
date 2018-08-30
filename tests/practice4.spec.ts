import { recursiveFactorial } from "../src/practice4-solution";
// import { recursiveFactorial } from "../src/practice4";
import { memoize } from "../src/practice2-solution";

describe("practice4 - factorials", () => {
  test("recursiveFactorial", () => {
    expect(recursiveFactorial(5)).toEqual(120);
  });

  test("memoized factorial", () => {
    const product = memoize(recursiveFactorial);
    expect(product(5)).toEqual(120);
  });
});
