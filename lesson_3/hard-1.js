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

//Q4) Can you identify all of the variables, primitive values, and objects in the following code?
function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

/**
 * Variables: boo function, scare parameter, the value stored in myBoo on line 2, halloweenCollection, myBoo on line 12. (console is also a variable name, as console is a property of the global object).
 * Primitive values: value stored in myBoo variable on line 2, "Happy Halloween", "Boo", "May all your pumpkins be glowing", "greet", "scare", "wish", "greet" on line 12, value stored in myBoo on line 12 (undefined), value passed to boo().
 * Objects: boo function, halloweenCollection. (The log and toUpperCase methods and the console object also count - methods are just functions referenced by object properties).
 */

/**
 * Q5)
 * Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions.
 * Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:
 */
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

//Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    //(/\d+$/ is a regular expression) returns a truthy value if str is a string of digits.
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
