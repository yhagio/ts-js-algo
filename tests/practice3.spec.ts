import { joinElements } from "../src/practice3-solution";
// import { joinElements } from "../src/practice3";

describe("joinElements", () => {
  test("test 1", () => {
    expect(joinElements(["s", "cr", "t cod", " :) :)"], "e")).toEqual(
      "secret code :) :)"
    );
  });
});
