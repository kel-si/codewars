/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
*/

function sumArray(array) {
  if (!array) {
    return 0;
  }

  const sorted = array.sort((a, b) => a - b);

  const removeLast = sorted.pop();
  const removeFirst = sorted.shift();
  return sorted.reduce((a, b) => a + b, 0);
}
