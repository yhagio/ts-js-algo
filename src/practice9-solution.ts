// Write a function, makeChange, that returns an integer that represents
// the least number of coins that add up to an amount where
// the amount is always divisible by 5.

// coin values: 5, 10, 25

export function makeChange(coins: number[], input: number): number {
  if (input % 5 !== 0) {
    throw new Error("Input must be divisible by 5");
  }
  // DESC order (Big ones first)
  coins.sort((a, b) => b - a);

  let i = 0;
  let total = 0;

  while (input > 0) {
    if (coins[i] <= input) {
      input -= coins[i];
      total++;
    } else {
      i++;
    }
  }

  return total;
}

// input amount: 40 , output # of coins: 3 (25, 10, 5)
// input amount: 35, output # of coins: 2 (25, 10)
