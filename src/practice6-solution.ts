// TASK: Implement binary search.

export function binarySearch(list: number[], item: number): number {
  let min: number = 0;
  let max: number = list.length - 1;
  let guess;

  while (min <= max) {
    // 1 Guess is middle
    guess = Math.floor((min + max) / 2);

    if (list[guess] === item) {
      return guess;
    }

    // 2 Guess is smaller or bigger -> update min or max
    if (list[guess] < item) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
}

binarySearch([2, 6, 7, 90, 103], 90);
