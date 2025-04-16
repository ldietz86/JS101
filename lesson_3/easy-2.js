//Q1) Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

//A1)
advice.replace("important", "urgent");

//How would you replace all occurrences of "important" instead of only the first one?
advice.replaceAll("important", "urgent");

//Q2) Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
let numbersCopy = numbers.slice(); //create shallow copy
numbersCopy.reverse(); //reverse copy
console.log(numbersCopy); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); //[1, 2, 3, 4, 5]

numbers = [1, 2, 3, 4, 5];
let nums = numbers.map((num) => num); //create shallow copy
nums.sort((num1, num2) => num2 - num1);
console.log(nums); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); //[1, 2, 3, 4, 5]

//Using spread syntax
let numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

//Using forEach()
let numbers = [1, 2, 3, 4, 5];
let reversedArr = [];

numbers.forEach((num) => {
  reversedArr.unshift(num);
});

console.log(reversedArr);

//Q3) Given a number and an array, determine whether the number is included in the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;

numbers.includes(number1); // false

//Q4) Show two different ways to put the expected "Four score and " in front of "seven years ago..."

let famousWords = "seven years ago...";

`Four score and ${famousWords}`;

let sentence = "Four score and ";
sentence += famousWords;

"Four score and " + famousWords;
"Four score and ".concat(famousWords);

//Q5) Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].
let numsArray = [1, 2, 3, 4, 5];

numsArray.splice(2, 1); // .splice(startIndex, deleteCount, ...items)
console.log(numsArray);

//Q6)
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

//Create a new array that contains all of the above values, but in an un-nested format:
["Fred", "Wilma", "Barney", "Betty", "Bambam", "Pebbles"];

let flattenedArr = flintstones.flat();

flintstones = [].concat(...flintstones);

flintstones = flintstones.reduce((acc, el) => {
  return acc.concat(el);
}, []);

let newFlintstones = [];
flintstones.forEach((el) => {
  newFlintstones = newFlintstones.concat(el);
});

//Q7)

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

//Create an array from this object that contains only two elements: Barney's name and Barney's number:
["Barney", 2];

Object.entries(flintstones).filter((pair) => pair[0] === "Barney")[0];
Object.entries(flintstones).find((pair) => pair[0] === "Barney");

Object.entries(flintstones)
  .filter((pair) => pair[0] === "Barney")
  .shift();

//Q8) How would you check whether the objects assigned to variables numbers and table below are arrays?
let numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

Array.isArray(numbers); // true
Array.isArray(table); // false

//Q9) If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

//Q10) Write a one-line expression to count the number of lower-case t characters in each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let countTs = statement1.split("").filter((char) => char === "t").length;

console.log(countTs); // 2

//multi-line using reduce()
let countTs = statement1
  .split("")
  .reduce((acc, currentVal) => (currentVal === "t" ? acc + 1 : acc), 0);

console.log(countTs); // 2
