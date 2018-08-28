import {
  times10,
  memoTimes10,
  memoizedClosureTimes10,
  memoize
} from "../src/practice2-solution";
// import {
//   times10,
//   memoTimes10,
//   memoizedClosureTimes10,
//   memoize
// } from "../src/practice2";

describe("times10", () => {
  test("test 1", () => {
    expect(times10(10)).toEqual(100);
  });

  test("test 2", () => {
    expect(times10(5)).toEqual(50);
  });
});

describe("memoTimes10", () => {
  test("test 1", () => {
    expect(memoTimes10(10)).toEqual(100);
  });

  test("test 2", () => {
    expect(memoTimes10(5)).toEqual(50);
  });
});

describe("memoizedClosureTimes10", () => {
  let memoizedClosureTimes10Sample;
  beforeEach(() => {
    memoizedClosureTimes10Sample = memoizedClosureTimes10();
  });

  test("test 1", () => {
    expect(memoizedClosureTimes10Sample(10)).toEqual(100);
  });

  test("test 2", () => {
    expect(memoizedClosureTimes10Sample(5)).toEqual(50);
  });
});

describe("memoize", () => {
  let memoizeSample;
  beforeEach(() => {
    memoizeSample = memoize(times10);
  });

  test("test 1", () => {
    expect(memoizeSample(10)).toEqual(100);
  });

  test("test 2", () => {
    expect(memoizeSample(5)).toEqual(50);
  });
});
