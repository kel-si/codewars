function bonusTime(salary, bonus) {
  return bonus ? `£${salary * 10}` : `£${salary}`;
}

console.log(bonusTime(10000, true)); // '£100000'
console.log(bonusTime(60000, false)); // '£60000'
