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

// returns a boolean if at least one element meets the condition

const length = words.some((word) => word.length > 10);
console.log("length", length); // true

const superLength = words.some((word) => word.length > 15);
console.log(superLength); //false

const greater1000 = nums.some((num) => num >= 1000);
console.log("greater1000", greater1000); // true

const factorOfThree = nums.some((num) => num % 3 === 0);
console.log("factorOfThree", factorOfThree); //true

const facOf130 = nums.some((num) => num % 130 === 0);
console.log("facOf130", facOf130); //false
