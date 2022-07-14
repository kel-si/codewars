//Instructions: return the longest period of free time in a schedule ["12:15PM-02:00PM", "09:00AM-9:15AM", "10:30AM-12:00PM"]

//Pair programmed: @kel-si & @rkrowchuk

function mostFreeTime(strArr) {
  // create an array of arrays containing each appointment
  let splitArr = [];
  for (const time of strArr) {
    splitArr.push(time.split("-"));
  }

  let numberArr = [];

  // convert to 24hr time and combine into one array
  for (const time of splitArr) {
    for (const item of time) {
      if (!item.includes("12:") && item.includes("PM")) {
        numberArr.push(parseInt(item.slice(0, 2) + item.slice(3, 5)) + 1200);
      } else {
        numberArr.push(parseInt(item.slice(0, 2) + item.slice(3, 5)));
      }
    }
  }

  // sort appointments (earliest to latest)
  const sortTimes = numberArr.sort((a, b) => a - b);

  //find difference in time
  let greatestDiff = 0;

  for (let i = 2; i < sortTimes.length; i++) {
    if (i % 2 === 0) {
      let currentDiff = sortTimes[i] - sortTimes[i - 1];
      if (currentDiff > greatestDiff) {
        greatestDiff = currentDiff;
      }
    }

    // create an array with digits as string
    let diffArr = greatestDiff.toString().split("");

    // check length to see if zeroes need to be added
    if (diffArr.length === 3) {
      diffArr.unshift("0");
    }

    if (diffArr.length === 2) {
      diffArr.unshift("0", "0");
    }

    if (diffArr.length === 1) {
      diffArr.unshift("0", "0", "0");
    }

    const hours = `${diffArr[0]}${diffArr[1]}:`;
    const stringMinutes = diffArr[2] + diffArr[3];

    // turn minutes into a number to check if it is greater than 60
    let minutes = parseInt(diffArr[2] + diffArr[3]);

    // subtract 40 for accuracy and then return the string
    if (minutes >= 60) {
      minutes -= 40;
      return hours + minutes.toString();
    }
    return hours + stringMinutes;
  }
}
// TESTS:
// console.log(
//   mostFreeTime(["12:15PM-02:00PM", "08:00AM-08:00AM", "10:30AM-12:00PM"]) //"02:30"
// );
// console.log(
//   mostFreeTime(["12:15PM-02:00PM", "08:00AM-10:25AM", "10:30AM-12:10PM"]) //"00:05"
// );
// console.log(
//   mostFreeTime(["12:15PM-02:00PM", "08:00AM-09:30AM", "10:30AM-12:10PM"]) //"01:00"
// );

// console.log(
//   mostFreeTime(["12:15PM-02:00PM", "08:00AM-09:35AM", "10:30AM-12:10PM"]) //"0:55"
// );

// console.log(
//   mostFreeTime(["12:15PM-02:00PM", "07:00AM-07:35AM", "10:30AM-12:10PM"]) //"2:55"
// );
// console.log(
//   mostFreeTime(["12:10PM-02:00PM", "07:00AM-10:30AM", "10:30AM-12:10PM"]) //"2:55"
// );
// console.log(
//   mostFreeTime(["09:00PM-10:00PM", "07:00AM-07:35AM", "10:00AM-11:00AM"]) //"10:00"
// );

// console.log(
//   mostFreeTime(["09:15PM-10:00PM", "07:00AM-07:35AM", "10:00AM-11:00AM"]) //"10:15"
// );
