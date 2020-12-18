import utils from "../src/utils";

describe("MAIN", () => {
  test("#Seperate Token of a line", () => {
    expect(utils.seperateToken("## Heading2")).toStrictEqual([
      true,
      "##",
      "Heading2",
    ]);
  });
});
