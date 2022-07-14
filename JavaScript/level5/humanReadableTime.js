function humanReadable(s) {
  let str = [];
  let finalArr = [];

  // number of whole hours
  const hours = Math.floor(s / 3600);

  // hours as seconds
  const h = hours * 3600;

  str.push(hours.toString());
  s = s - h;

  //number of whole minutes
  const minutes = Math.floor(s / 60);

  // number of minutes as seconds
  const m = minutes * 60;

  str.push(minutes.toString());
  s = s - m;

  str.push(s.toString());

  for (const num of str) {
    num.length < 2 ? finalArr.push(`0${num}`) : finalArr.push(num);
  }
  return finalArr.join(":");
}

console.log(humanReadable(45246)); // '12:34:06'
