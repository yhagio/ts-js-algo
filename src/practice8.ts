//TASK: implement mergesort!
// Tip: Split the array into halves and merge them recursively
// Tip: return once we hit an array with a single item.
//      That is a sorted array of size 1!
// Tip: compare the arrays item by item and return the concatenated result
function merge(left: number[], right: number[]) {
  return [...left, ...right];
}

export function mergeSort(list: number[]): number[] {
  return merge(list, list);
}

/* HINT: pseudo-code

mergeSort function:

  initialize n to the length of the list
  base case is if n < 2, just return
  initialize mid to n/2
  left = left slice of array to mid - 1
  right = right slice of array mid to n - 1
  mergeSort(left)
  mergeSort(right)
  merge(left, right)

*/
