const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});


describe("return correct result", function () {
  let square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  let lettersSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  let singleSquare = [
    [1, 2, 3, 4, 5]
  ]
  test("requires single array containing num values", function () {
    const res = unroll(square);
    expect(res).toStrictEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });
  test("requires single array containing letter values", function () {
    const res = unroll(lettersSquare);
    expect(res).toStrictEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  })
  test("requires single array containing values from single array", function () {
    const res = unroll(singleSquare);
    expect(res).toStrictEqual([1, 2, 3, 4, 5]);
  })
});