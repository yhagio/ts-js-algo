//TASK: implement mergesort!
// Tip: Split the array into halves and merge them recursively
// Tip: return once we hit an array with a single item.
//      That is a sorted array of size 1!
// Tip: compare the arrays item by item and return the concatenated result
function merge(left: number[], right: number[]) {
  let leftIndex: number = 0;
  let rightIndex: number = 0;
  const result: number[] = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

export function mergeSort(list: number[]): number[] {
  if (list.length < 2) {
    return list;
  }
  const middle: number = Math.floor(list.length / 2);
  const left: number[] = list.slice(0, middle);
  const right: number[] = list.slice(middle);
  const sortedLeft: number[] = mergeSort(left);
  const sortedRight: number[] = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}
