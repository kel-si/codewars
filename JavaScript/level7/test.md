// write a function that given 5 numbers in an array will return the lowest
// and the highest possible values when summing 4 of the numbers.

function sum(numbers) {
// lowest - highest
const sorted = numbers.sort((a,b) => a-b);

//highest - sum the last 4 of the array
let highest = 0;
for (let i = 1; i < numbers.length; i++ ) {
highest += numbers[i];
}

let lowest = 0;
for (let i = 0; i < numbers.length - 1; i++ ) {
lowest += numbers[i];
}

return `${highest} ${lowest}`;
}
