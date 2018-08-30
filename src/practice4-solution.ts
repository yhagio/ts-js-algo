import { memoize } from "./practice2";

// Task 1: Without peeking, write your own recursive factorial method

// First attempt
export function recursiveFactorial0(product: number, num?: number) {
  if (num === 1) {
    return product;
  }

  const nextNum: number = num === undefined ? product - 1 : num - 1;
  return recursiveFactorial0(product * nextNum, nextNum);
}

// Better solution
export function recursiveFactorial(num: number) {
  if (num <= 1) {
    return num;
  }

  return num * recursiveFactorial(num - 1);
}

// Task 2: Use your memo function
// from the previous exercise to memoize your factorial method
// const fact = memoize(recursiveFactorial);
// fact(5);  =>  120
