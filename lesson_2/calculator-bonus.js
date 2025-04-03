const MESSAGES = require("./calculator_messages.json");

const readline = require("readline-sync");

const LANGUAGE = "en";

function prompt(message) {
  console.log(`=> ${message}`);
}

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function invalidOperation(operation) {
  return !["1", "2", "3", "4"].includes(operation);
}

prompt(messages("welcome", "fr"));

while (true) {
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages("invalidNumber", "fr"));
    number1 = readline.question();
  }

  console.log("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages("invalidNumber", "fr"));
    number2 = readline.question();
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

  prompt("Would you like to perform another operation?\n (yes/no)");
  let response = readline.question();

  if (response.toLowerCase() !== "yes") break;
}
