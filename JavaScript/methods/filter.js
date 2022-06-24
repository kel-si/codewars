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

//returns an array of only even numbers
const evenNums = nums.filter((num) => num % 2 === 0);
console.log("evenNums", evenNums);

// returns an array of words with a length of 4 or less
const shortWords = words.filter((word) => word.length <= 4);
console.log("shortWords", shortWords);
