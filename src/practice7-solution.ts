//TASK: Implement bubblesort!

export function bubbleSort(list: number[]): number[] {
  let swapped = true;
  while (swapped) {
    let temp;
    for (let i = 0; i + 1 < list.length; i++) {
      swapped = false;
      if (list[i] > list[i + 1]) {
        temp = list[i + 1];
        list[i + 1] = list[i];
        list[i] = temp;
        swapped = true;
        break;
      }
    }
  }
  return list;
}
