const nums = [13, 1989, 8, 23, 11, 12];
const words = [
  "taylor swift",
  "fearless",
  "speak now",
  "red",
  "1989",
  "reputation",
  "lover",
  "folklore",
  "evermore",
];

//alphabetical
const alphaSort = words.sort();
// console.log("alpha sort", alphaSort);

//reverse alphabetical
const revAlphaSort = alphaSort.reverse();
// console.log("reverse alpha sort", revAlphaSort);

//sorts based on first digit [11, 12, 13, 1989...]
const numSort = nums.sort();
// console.log("numSort", numSort);

//sorts based on first digit (reverse) [8, 23, 1989, 13...]
const desNumSort = nums.reverse();
// console.log("desNumSort", desNumSort);

// ascending order [8, 11, 12, 13...]
const asc = nums.sort(function (a, b) {
  return a - b;
});
// console.log("asc", asc);

// descending order [1989, 23, 13...]
const des = nums.sort(function (a, b) {
  return b - a;
});
// console.log("des", des);
