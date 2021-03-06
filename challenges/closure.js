// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: Nested function can access the variable internal because of closure. the functions are bundled together.



/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function sumation(array) {
  let max = Math.max(array[0], array[1]);
  let min = Math.min(array[0], array[1]);
  let placeHolder = 0;
  for (let i = min; i <= max; i++) {
    placeHolder += i;
  }
  return placeHolder;
}
console.log(sumation([1, 4]));