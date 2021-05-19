function calcAvg(...arr) {
  let sum = 0;
  for (let number of arr) {
    if (number < 6) {
      console.log("negative number");
      return;
    } else {
      sum = sum + number;
    }
  }
  let avg = sum / arr.length;
  return avg.toFixed(1);
}

function calcAvgES(...arr) {
  const postiveNumbers = arr.filter((number) => number > 5);
  const sumOfNumbers = postiveNumbers.reduce((sum, el) => sum + el);
  const averageNumber = sumOfNumbers / postiveNumbers.length;
  return averageNumber;
}

console.log(calcAvg(6, 5, 8));
