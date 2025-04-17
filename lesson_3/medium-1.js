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

