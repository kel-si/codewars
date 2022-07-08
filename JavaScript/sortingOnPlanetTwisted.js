// Instructions: sort the array when 7's have the value of 3's and vice versa

function sortTwisted37(array) {
  let arr3 = [];
  let arr7 = [];
  let both = [];
  let combined = [];
  let final = [];

  for (let num of array) {
    if (num.toString().includes("37")) {
      both.push(num.toString().replace(["37"], "73"));
    } else if (num.toString().includes("73")) {
      both.push(num.toString().replace(["73"], "37"));
    } else if (num.toString().includes("3")) {
      arr3.push(num.toString().replace(/["3"]/g, "7"));
    } else if (num.toString().includes("7")) {
      arr7.push(num.toString().replace(/["7"]/g, "3"));
    } else {
      combined.push(num);
    }
  }
  const sorted = combined.concat(arr3, arr7, both).sort((a, b) => a - b);

  for (let num of sorted) {
    if (num.toString().includes("73")) {
      final.push(parseInt(num.replace(["73"], "37")));
    } else if (num.toString().includes("37")) {
      final.push(parseInt(num.replace(["37"], "73")));
    } else if (num.toString().includes("3")) {
      final.push(parseInt(num.replace(/["3"]/g, "7")));
    } else if (num.toString().includes("7")) {
      final.push(parseInt(num.replace(/["7"]/g, "3")));
    } else {
      final.push(num);
    }
  }

  return final;
}
