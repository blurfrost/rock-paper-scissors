// initialize human and computer's scores as zero
let humanScore = 0;
let computerScore = 0;

// prints out human's choice in the console
let humanChoice = getHumanChoice();
console.log("Human's choice: " + humanChoice);

// prints out computer's choice in the console
let computerChoice = getComputerChoice();
console.log("Computer's choice: " + computerChoice);

// plays out a single round
console.log(playRound(humanChoice, computerChoice));



// function that obtain human choice
function getHumanChoice() {
    // set up while loop
    let madeChoice = false;
    let humanChoice = ""
    // while loop, continuously prompt for either of the 3 choices 
    while (madeChoice == false) {
        // prompt user for an input
        humanChoice = prompt("Input either Rock, Paper or Scissors (case insensitive)")
        // make the choice case-insensitive
        humanChoice = humanChoice.toLowerCase();
        // if rock or paper or scissors is chosen, then escape while loop
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            madeChoice = true;
            break;
        }
        // prompt user again if the input is not what was desired
        else {
            console.log("Invalid input, please try again");
        }
    }
    // returns chosen input
    return humanChoice;
}

// function that returns either rock, paper, or scissors
function getComputerChoice() {
    // determine random value, multiply math.random by 3 to get a number between 0 (inclusive) and 3 (exclusive)
    value = Math.random() * 3;
    console.log("Random value: " + value);
    // clear value of choice
    let computerChoice = "";
    // if the value is between 0 and 1, computer chooses rock
    if (value >= 0 && value < 1) {
        computerChoice = "rock";
        return computerChoice;
    }
    // if the value is between 1 and 2, computer chooses paper
    else if (value >= 1 && value < 2) {
        computerChoice = "paper";
        return computerChoice;
    }
    // in other cases (value is between 2 and 3), computer chooses scissors
    else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

function playRound (humanChoice, computerChoice) {
    let resultText = "";
    if (humanChoice === computerChoice) {
        resultText = "Draw! Both players chose " + humanChoice + " .";
        return resultText;
    }
    // if human chose rock
    else if (humanChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                resultText = "Paper beats Rock, Computer wins!";
                return resultText;
            case "scissors":
                resultText = "Rock beats Scissors, Human wins!";
                return resultText;
            default:
                resultText = "Error";
                return resultText;
        }
    }
    else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                resultText = "Paper beats Rock, Human wins!";
                return resultText;
            case "scissors":
                resultText = "Scissors beats Paper, Computer wins!";
                return resultText;
            default:
                resultText = "Error";
                return resultText;
        }
    }
    else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                resultText = "Rock beats Scissors, Computer wins!";
                return resultText;
            case "paper":
                resultText = "Scissors beats Paper, Human wins!";
                return resultText;
            default:
                resultText = "Error";
                return resultText;
        }
    }
    else {
        return resultText = "Error";
    }
}