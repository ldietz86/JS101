/*
Take everything that you've learned so far and build a mortgage calculator (or car payment calculator -- it's the same thing) that determines the monthly payment assuming that interest is compounded monthly.

You'll need three pieces of information:
- the loan amount
- the Annual Percentage Rate (APR)
- the loan duration

From the above, you'll need to calculate the following two things:
- monthly interest rate (APR / 12)
- loan duration in months

let m = p * (j / (1 - Math.pow((1 + j), (-n))));

m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months
*/

let readlineSync = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

while (true) {
  console.log("What is your loan amount?");
  let loanAmount = readlineSync.question();
  while (invalidNumber(loanAmount)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loanAmount = readlineSync.question();
  }

  console.log("What is the Annual Percentage Rate (APR)?");
  let annualPercentageRate = readlineSync.question();
  while (invalidNumber(annualPercentageRate)) {
    prompt("Hmm... that doesn't look like a valid number.");
    annualPercentageRate = readlineSync.question();
  }
  annualPercentageRate = annualPercentageRate / 100;

  console.log("What is the loan duration in years?");
  let loanDuration = readlineSync.question();
  while (invalidNumber(loanDuration)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loanDuration = readlineSync.question();
  }

  let monthlyInterestRate = annualPercentageRate / 12;
  let loanDurationMonths = loanDuration * 12;

  let monthlyPayment =
    loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDurationMonths)));

  console.log(
    `Your monthly payment comes out to: $${monthlyPayment.toFixed(2)}`
  );

  prompt(
    "Would you like to calculate another monthly mortgage payment?\n (yes/no)"
  );
  let response = readlineSync.question();

  if (response.toLowerCase() !== "yes") break;
}
