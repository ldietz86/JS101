/*
1. If player a chooses rock and player b chooses scissors, player a wins.
2. If player a chooses paper and player b chooses rock, player a wins.
3. If player a chooses scissors and player b chooses paper, player a wins.
4. If both players choose the same item, neither player wins. It's a tie.

Game flow:
1. The user makes a choice.
2. The computer makes a choice.
3. The winner is displayed.
*/

console.log("Welcome to Rock Paper Scissors!");

const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];
let replay = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function win(player1, player2) {
  return (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  );
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if (win(userChoice, computerChoice)) {
    prompt("You win!");
  } else if (win(computerChoice, userChoice)) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

while (replay) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice");
    userChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);

  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(userChoice, computerChoice);

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  replay = answer[0] === "y";
}
