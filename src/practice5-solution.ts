// TASK: Implement linear search.

export function linearSearch(list: number[], item: number): number {
  let index: number = -1;
  list.forEach((num, i) => {
    if (num === item) {
      index = i;
    }
  });
  return index;
}

// Cheat LOL
export function linearSearch1(list: number[], item: number): number {
  return list.indexOf(item);
}

linearSearch([2, 6, 7, 90, 103], 90);
