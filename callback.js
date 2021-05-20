function classicFunction(func) {
  console.log("ClassicFunction");
}

function insideClassicFunction() {
  console.log("insideClassicFunction");
}

classicFunction(insideClassicFunction());
