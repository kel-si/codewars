function isValidShape(sideLengths, numOfSides) {
  const max = Math.max(...sideLengths);
  const sum =
    sideLengths.reduce((prev, current) => prev + current) -
    Math.max(...sideLenghts);

  return max >= sum || sideLengths.length !== numOfSides ? false : true;
}

console.log(isValidShape([2, 6, 7], 3)); // true
