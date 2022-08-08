/*
The function minutesToMidnight(d) will take a date object as parameter. Return the number of minutes in the following format:

"x minute(s)"

You will always get a date object with of today with a random timestamp.
You have to round the number of minutes.
Milliseconds don't matter!
*/

function minutesToMidnight(d) {
  const hours = 23 - d.getHours();
  let minutes = 60 - d.getMinutes();

  d.getSeconds() >= 30 ? (minutes -= 1) : minutes;

  const minLeft = hours * 60 + minutes;

  return minLeft === 1 ? "1 minute" : `${minLeft} minutes`;
}
