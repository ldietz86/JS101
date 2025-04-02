// Ask user for the first number.
// Ask user for the second number.
// Ask user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

console.log("Welcome to the calculator!");

let readlineSync = require("readline-sync");

let firstNumber = parseInt(readlineSync.question("What's the first number?\n"));
let secondNumber = parseInt(
  readlineSync.question("What's the second number?\n")
);

let operation = readlineSync
  .question("Choose an operation: add, subtract, multiply, or divide?\n")
  .toLowerCase();

if (operation === "add") {
  console.log(firstNumber + secondNumber);
} else if (operation === "subtract") {
  console.log(firstNumber - secondNumber);
} else if (operation === "multiply") {
  console.log(firstNumber * secondNumber);
} else if (operation === "divide") {
  console.log(firstNumber / secondNumber);
} else {
  console.log("Sorry, the operation you chose cannot be performed.");
}

/* LS solution:
const readline = require("readline-sync");

console.log("Welcome to Calculator!");

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
);
let operation = readline.question();

let output;
if (operation === "1") {
  // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === "2") {
  // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === "3") {
  // 3 represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === "4") {
  // 4 represents division
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);
*/

//Refactored calculator
const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function invalidOperation(operation) {
  return !["1", "2", "3", "4"].includes(operation);
}

prompt("Welcome to Calculator!");

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

console.log("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

console.log(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
);
let operation = readline.question();
while (invalidOperation(operation)) {
  prompt("Must choose 1, 2, 3 or 4");
  operation = readline.question();
}

let output;
switch (operation) {
  case "1":
    output = Number(number1) + Number(number2);
    break;
  case "2":
    output = Number(number1) - Number(number2);
    break;
  case "3":
    output = Number(number1) * Number(number2);
    break;
  case "4":
    output = Number(number1) / Number(number2);
    break;
}

console.log(`The result is: ${output}`);
