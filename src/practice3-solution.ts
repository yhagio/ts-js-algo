export function joinElements(arr: string[], joinString: string): string {
  let resultSoFar = "";
  for (let i = 0; i < arr.length - 1; i++) {
    resultSoFar += arr[i] + joinString;
  }
  return resultSoFar + arr[arr.length - 1];
}

joinElements(["s", "cr", "t cod", " :) :)"], "e"); // secret code :) :)
