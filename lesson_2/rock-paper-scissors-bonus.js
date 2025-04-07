console.log("Welcome to Rock Paper Scissors Lizard Spock! 🦎 🖖");

const readline = require("readline-sync");
let replay = true;

let MAX_SCORE = 3;
const VALID_CHOICES = {
  r: "rock",
  p: "paper",
  sc: "scissors",
  l: "lizard",
  sp: "spock",
};
const CHOICE_KEYS = Object.keys(VALID_CHOICES);
const CHOICE_VALUES = Object.values(VALID_CHOICES);

function prompt(message) {
  console.log(`=> ${message}`);
}

function win(player1, player2) {
  return (
    (player1 === "rock" && (player2 === "scissors" || player2 === "lizard")) ||
    (player1 === "paper" && (player2 === "rock" || player2 === "spock")) ||
    (player1 === "scissors" && (player2 === "paper" || player2 === "lizard")) ||
    (player1 === "lizard" && (player2 === "spock" || player2 === "paper")) ||
    (player1 === "spock" && (player2 === "scissors" || player2 === "rock"))
  );
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if (win(userChoice, computerChoice)) {
    prompt("You won this round!");
    return "user";
  } else if (win(computerChoice, userChoice)) {
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
    prompt(
      "Choose one: r (rock), p (paper), sc (scissors), l (lizard), sp (spock)"
    );
    let userInput = readline.question().toLowerCase();

    while (!CHOICE_KEYS.includes(userInput)) {
      prompt("That's not a valid choice.");
      userInput = readline.question().toLowerCase();
    }

    let randomIndex = Math.floor(Math.random() * CHOICE_VALUES.length);

    let userChoice = VALID_CHOICES[userInput];
    let computerChoice = CHOICE_VALUES[randomIndex];

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
