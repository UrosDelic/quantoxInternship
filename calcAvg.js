function calcAvg(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 6) {
      console.log("negative number");
      return;
    } else {
      sum = sum + arr[i];
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

console.log(calcAvgES(5, 6, 7));
