function min(list) {
  // let minNum = list[0];
  // for (const num of list) {
  //   if (num < minNum) {
  //     minNum = num;
  //   }
  // }
  // return minNum;

  return Math.min(...list);
}

function max(list) {
  // let maxNum = list[0];
  // for (const num of list) {
  //   if (num > maxNum) {
  //     maxNum = num;
  //   }
  // }
  // return maxNum;

  return Math.max(...list);
}
