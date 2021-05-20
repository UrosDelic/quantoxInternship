function calcAvg(...arr) {
  let sum = 0;
  for (let number of arr) {
    if (number > 5) {
      sum = sum + number;
    } else {
      console.log("Negative number");
      return;
    }
  }
  let avg = sum / arr.length;
  return avg.toFixed(2);
}

function calcAvgES(...arr) {
  const postiveNumbers = arr.filter((number) => number > 5);
  const sumOfNumbers = postiveNumbers.reduce((sum, el) => sum + el);
  const averageNumber = sumOfNumbers / postiveNumbers.length;
  return averageNumber;
}

console.log(calcAvg(6, 7, 7, 6));
