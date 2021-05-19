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

console.log(calcAvg(6, 6, 7));
