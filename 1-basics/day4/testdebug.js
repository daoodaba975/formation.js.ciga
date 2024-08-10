console.log("Début du programme");

function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
    console.log("Test 1");
  } else {
    result = "NOT positive";
    console.log("Test 2");
  }
  return result;
}

console.log("Fin du programme");
console.log(testNum(5));
