describe("split", function () {
  it("returns 2 arrays", function () {
    expect(split([])).toEqual([[], []]);
  });
  it("returns 2 arrays w/values", function () {
    expect(split([1, 2, 3, 5])).toEqual([
      [1, 2],
      [3, 5],
    ]);
  });
});

describe("merge", function () {
  it("takes two array arguments and returns one Array", function () {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("takes two array arguments and returns sorted single array", function () {
    expect(merge([1, 7, 9], [4, 5, 8, 12, 13])).toEqual([
      1,
      4,
      5,
      7,
      8,
      9,
      12,
      13,
    ]);
  });
});

describe("mergeSort", function () {
  it("takes an array and returns an array", function () {
    expect(mergeSort([])).toEqual([]);
  });
  it("takes an array and returns a sorted array", function () {
    expect(mergeSort([4, 10, 6, 1, 11, 7])).toEqual([1, 4, 6, 7, 10, 11]);
  });
  it("calls the split function", function () {
    spyOn(window, "split").and.callThrough();
    mergeSort([1, 2]);
    expect(window.split.calls.count()).toEqual(1);
  });
  it("calls the merge function", function () {
    spyOn(window, "merge").and.callThrough();
    mergeSort([1, 2]);
    expect(window.merge.calls.count()).toEqual(1);
  });
});
