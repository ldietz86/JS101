//Q1) Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;

//A1) No, a sparse array is created. Indices 3, 4 and 5 will become empty slots.

//Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4]; // what will this line return? This line will return undefined.

/*
numbers[4] will output undefined, but the slot is empty -- it doesn't have a value, not even undefined, in spite of what the line returns. 
This distinction is important: if you use map(), for instance, the new array will also have empty slots in the corresponding positions. 
On the other hand, slots with a value of undefined will be remapped based on the return value of the callback:
*/

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10); // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

//Q2) How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//A2) 
str1[str1.length - 1] === "!";

//MDN: The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
str1.endsWith("!"); //true

endsWith(searchString, endPosition);
//endPosition is optional and it is the position at which searchString is expected to be found. Defaults to str.length.

//Q3) Determine whether the following object of people and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

//A3) MDN: The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).
ages.hasOwnProperty("Spot"); //false

//Q4) Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized.
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

//A4)
munstersDescription.slice(0, 1).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

munstersDescription.substring(0, 1).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

munstersDescription[0].toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

//Q5) What will the following code output?
console.log(false == "0");
console.log(false === "0");

/* 
A5) true and false.
The first comparison uses the non-strict equality operator so JavaScript will attempt to coerce the value to the same type before comparison.
JS coerces '0' to 0 and false to 0, so the comparison becomes 0 == 0 which is true.
*/

//Q6) We have most of the Munster family in our ages object:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

//Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

//A6)
Object.assign(ages, additionalAges); //MDN: The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//Q7) Determine whether the name Dino appears in the strings below -- check each string separately:
let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

//A7)
str1.includes("Dino"); //false
str2.includes("Dino"); //true

//Alternate solutions:
str1.match("Dino") !== null; // false
str2.match("Dino") !== null; // true

str1.indexOf("Dino") > -1; // false
str2.indexOf("Dino") > -1; // true

//Q8) How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

//A8)
flintstones.push("Dino");

//Alternate solutions:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones = flintstones.concat("Dino");
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones[flintstones.length] = "Dino";
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

//Q9) In the previous problem, our first answer added 'Dino' to the array using push. How can we add multiple items to our array? ('Dino' and 'Hoppy').
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy"); //push accepts multiple arguments

let names = ["Dino", "Hoppy", "Lisa", "Bart"];
flintstones.push(...names); //push multiple names using spread syntax

//Q10) Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

advice.split(" ").slice(0, 8).join(" ");

advice.slice(0, advice.indexOf("house"));
