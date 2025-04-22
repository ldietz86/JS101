//Q1) Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

/**
 * first() function - returns an object with the key prop1 and the value 'hi there'. 
 * second() function - returns undefined. There are two semicolons that are incorrectly placed: the semicolon after the 
 * return statement will immediately end execution of the function and the semicolon inside the block is incorrect object syntax.
 * You can get this function to return an object by removing the first semicolon and replacing the second one with a comma or removing it entirely.
 */


//Q2) What will the following code output?
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

//This will log [1, 2] to the console. .push() is a destructive method.

/**
 * If, instead of modifying the original object, we want to modify numArray but not object, we have two options:
 * We can declare and initialize numArray with a reference to a copy of the original array:
 */
let object = { first: [1] };
let numArray = object["first"].slice(); 
numArray.push(2);

//We can use Array.prototype.concat(), which returns a new array instead of modifying the original array:
let object = { first: [1] };
let numArray = object["first"].concat(); 
numArray.push(2);

//Q3) Given the following similar sets of code, what will each code snippet print?
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * This will print:
 * "one is: one"
 * "two is: two"
 * "three is: three"
 * 
 * The local parameters one, two and three shadow the outer-scoped variables with the same name. 
 * Reassignment is not a destructive operation.
 */

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * This will print:
 * "one is: one"
 * "two is: two"
 * "three is: three"
 */

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"]; //reassigned to brand new arrays
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * This will print:
 * "one is: two"
 * "two is: three"
 * "three is: one"
 * 
 * .splice() is a destructive method
 */

