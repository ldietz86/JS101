console.log("Welcome to Rock Paper Scissors Lizard Spock! 🦎 🖖");

const readline = require("readline-sync");
let replay = true;

let MAX_SCORE = 3;

const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

const VALID_CHOICES = Object.keys(WINNING_COMBOS);

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if (playerWins(userChoice, computerChoice)) {
    prompt("You won this round!");
    return "user";
  } else if (playerWins(computerChoice, userChoice)) {
    prompt("Computer wins this round!");
    return "computer";
  } else {
    prompt("It's a tie!");
    return "tie";
  }
}

while (replay) {
  let userScore = 0;
  let computerScore = 0;

  while (userScore < MAX_SCORE && computerScore < MAX_SCORE) {
    prompt("Choose one: rock, paper, scissors, lizard, spock");
    let userChoice = readline.question().toLowerCase();

    while (!VALID_CHOICES.includes(userChoice)) {
      prompt("That's not a valid choice. Please try again.");
      userChoice = readline.question().toLowerCase();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    let result = displayWinner(userChoice, computerChoice);

    if (result === "user") {
      userScore += 1;
    } else if (result === "computer") {
      computerScore += 1;
    }

    prompt(`🧍 You: ${userScore} | 💻 Computer: ${computerScore}`);
  }
  prompt(
    userScore === MAX_SCORE
      ? "Congrats, you won the game! 🎉"
      : "You lost the game, better luck next time!"
  );

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  replay = answer[0] === "y";
}
