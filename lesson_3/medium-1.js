/**
 * Q1) Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.
 * For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it.
 * The output should start out like this:
 */

function ascii(string) {
  for (let i = 0; i <= 9; i++) {
    console.log(" ".repeat(i) + string);
  }
}

ascii("The Flintstones Rock!");

//Q2) Starting with a string. Return a new string that swaps the case of all of the letters:
let munstersDescription = "The Munsters are creepy and spooky.";

let chars = munstersDescription.split("");
let result = "";

for (let i = 0; i < chars.length; i++) {
  if (chars[i] === chars[i].toUpperCase()) {
    result += chars[i].toLowerCase();
  } else if (chars[i] === chars[i].toLowerCase()) {
    result += chars[i].toUpperCase();
  }
}

console.log(result);

//Using map()
console.log(
  munstersDescription
    .split("")
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("")
);

//Using map() + ternary operator
let swapped = munstersDescription
  .split("")
  .map((char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  )
  .join("");

console.log(swapped);

//Q3) This code fails when the input is 0 or a negative number. How can this work without using a do/while loop?
// Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

/**
 * Bonus: What is the purpose of number % divisor === 0 in that code? It checks if the the divisor goes evenly into the number.
 * If factors.push(divisor) is used instead of factors.push(number/divisor), the factors array would be in descending order instead of ascending order.
 */

//Q4) Is there a difference between these implementations, other than the method used to add an element to the buffer? You may assume that newElement will always be a primitive value.
// addToRollingBuffer1 has a side effect because it mutates the original array. Whereas, addToRollingBuffer2 does not. 
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

//Q5) What will the following two lines of code output?
console.log(0.3 + 0.6); //0.89999
console.log(0.3 + 0.6 === 0.9); //false

//Q6) What do you think the following code will output?
let nanArray = [NaN];

console.log(nanArray[0] === NaN); //false

console.log(nanArray[0] !== NaN) //true - NaN is the only value that doesn't equal itself but this only works here bc we know the value on the left is NaN.

/**
 * How can you reliably test if a value is NaN?
 * console.log(Number.isNaN(nanArray[0])); // true
 * 
 * NaN -- not a number -- is a special numeric value that indicates that an operation that was intended to return a number failed. JavaScript doesn't let you use == and === to determine whether a value is NaN.
 */

//Q7) What is the output of the following code? 34
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); //This refers to the value stored in the globally scoped answer variable.

//Q8) Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach((familyMember) => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

//After writing this function, he typed the following code:
messWithDemographics(munsters);

//Did the family's data get ransacked? Why or why not?
/**
 * Object.values() returns an array of an object's string-keyed property values.
 * This would mutate the original object because the demoObject parameter references the original object in memory (munsters). 
*/

//Q9) We defined a function named rps which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

//What does the following code output?
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")); // "paper"

//Q10) Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

//What will the following function invocation return? "no"
bar(foo()); 
