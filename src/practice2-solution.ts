// Task 1: Write a function, times10, that takes an argument,
// n, and multiples n times 10
// a simple multiplication fn
export const times10 = (n: number): number => 10 * n;

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks
//           if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated,
//           calculate and then save the result in the cache object.
const cache = {};
export const memoTimes10 = (n: number): number => {
  if (n in cache) {
    return cache[n];
  }

  const result = times10(n);
  cache[n] = result;
  return result;
};

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.
export const memoizedClosureTimes10 = () => {
  const cache = {};
  return n => {
    if (n in cache) {
      return cache[n];
    }

    const result = times10(n);
    cache[n] = result;
    return result;
  };
};

// Task 4: Make your memo function generic and accept the times10 function as
// a callback rather than defining the n * 10 logic inside the if/else or
// pulling it in from the global scope.
// protip: Take advantage of the fact that parameters are saved
// in the closure as well, just like the cache from the previous example.
export const memoize = cb => {
  const cache = {};
  return (n, ...args) => {
    if (n in cache) {
      return cache[n];
    }

    let result = cb(n, ...args);
    cache[n] = result;
    return result;
  };
};
