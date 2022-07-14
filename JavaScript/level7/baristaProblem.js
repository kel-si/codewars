// Instructions:
// Given a list of the times you need to brew each coffee, return the minimum total waiting time. The order in which you brew the coffee is totally up to you - https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e/javascript

function barista(coffees) {
  // sort the array to complete the shortest orders first to decrease wait time
  const sortedCoffee = coffees.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < coffees.length; i++) {
    //the first customer (index 0) will not have any time to wait. The fourth custimer (index 3) will have three people ahead, so 3 * 2min to get 6 min of cleaning wait time
    const cleaningTime = i * 2;

    //counting how many times that order will be waited on
    count += coffees[i] * (coffees.length - i) + cleaningTime;
  }

  return count;
}

console.log(barista([4, 3, 2])); // 22
