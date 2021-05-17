// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(5));

// function reverseString(s) {
//   try {
//     console.log(s.split("").reverse().join(""));
//   } catch (error) {
//     console.log(e.message);
//   }
// }
function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else {
    throw a === 0 ? new Error("Zero Eror") : new Error("Negative Error");
  }
}
