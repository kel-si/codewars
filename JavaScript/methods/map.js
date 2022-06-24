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

// returns an array with numbers doubled
const doubles = nums.map((num) => num * 2);
// console.log("doubles", doubles);

//returns an array with all letters capitalized
const uppercase = words.map((word) => word.toUpperCase());
// console.log("uppercase", uppercase);

// capitalizes only first letter of each word
const firstUpper = words.map(
  (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
);
// console.log("firstUpper", firstUpper);
