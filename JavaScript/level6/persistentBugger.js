function persistence(number) {
  let counter = 0;

  number = number.toString();

  while (number.length > 1) {
    counter++;
    number = number
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  return counter;
}
console.log(persistence(39));
