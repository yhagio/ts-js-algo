// Task: rewrite this function so that it uses a loop rather than recursion

export function joinElements(arr: string[], joinString: string): string {
  function recurse(index: number, resultSoFar: string): string {
    resultSoFar += arr[index];

    if (index === arr.length - 1) {
      return resultSoFar;
    }

    return recurse(index + 1, resultSoFar + joinString);
  }

  return recurse(0, "");
}

joinElements(["s", "cr", "t cod", " :) :)"], "e"); // secret code :) :)
