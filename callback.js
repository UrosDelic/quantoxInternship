function classicFunction(func) {}

function insideClassicFunction() {
  console.log("insideClassicFunction");
}

classicFunction(insideClassicFunction());
