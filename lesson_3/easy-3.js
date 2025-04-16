//Q1) Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];

numbers.splice(0, numbers.length);

numbers.filter(() => false);

numbers.length = 0;

while (numbers.length) {
  numbers.pop();
}

//Q2) What will the following code output? This logs "1, 2, 34, 5" to the console.
console.log([1, 2, 3] + [4, 5]);

//Q3) What will the following code output? This logs "hello there" to the console. Primitives are immutable.
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

//Q4) What will the following code output? This logs [{ first: 42 }, { second: "value2" }, 3, 4, 5] to the console.
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); 

/*
Deep copy: makes a duplicate of every item in an existing array or object, including subarrays or subobjects in the source object.
Performing a deep copy on arr1 would result in two different arrays, as well as four separate objects.

Shallow copy: makes a duplicate of the outermost values in an array or object. Both arr1[0] and arr2[0] point to the same object in memory.
Likewise, arr1[1] and arr2[1] point to the { second: 'value2' } object. The slice() method performs shallow copies.

arr1 --> pointer --> { first: "value1" } <-- pointer <-- arr2 
arr1 --> pointer --> { second: "value2" } <-- pointer <-- arr2

After mutating the first property of the object at index 0 using arr2[0].first = 42;
arr1 --> pointer --> { first: 42 } <-- pointer <-- arr2 
arr1 --> pointer --> { second: "value2" } <-- pointer <-- arr2
*/

/**
 * Q5) The following function unnecessarily uses two return statements to return boolean values.
 * Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
 */

function isColorValid(color) {
  return color === "blue" || color === "green";
}

//Using an arrow function
const isColorValid = (color) => color === "blue" || color === "green";

//Using includes()
const isColorValid = (color) => ["blue", "green"].includes(color);

//Q6) Can you identify all of the variables, primitive values, and objects that exist when this code executes?
let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

/**
 * Variables: arr, newArr, num, newNum, double, num(param)
 * Primitive values: 1, 2, 3, 0, num value, newNum value, 2(inside function), 2(return value of function), newNum value(arg).
 * Objects: arr [1, 2, 3], newArr [1, 2, 3], function double
 */