var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.primer = "test primera";

function changeObjName(obj, name) {
  name = this.myDog.name;
}

let test = changeObjName(myDog, "testName");
console.log(test, "cons test");
