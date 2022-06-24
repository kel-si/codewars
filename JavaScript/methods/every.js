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

// returns a boolean based on all elements meeting a condition

const sameLength = words.every((word) => word.length === 5);
console.log("sameLength", sameLength); // false

const odd = nums.every((num) => num % 2 === 0);
console.log("odd", odd); // false
