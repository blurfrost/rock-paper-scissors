// function that returns either rock, paper, or scissors
function getComputerChoice() {
    // determine random value, multiply math.random by 3 to get a number between 0 (inclusive) and 3 (exclusive)
    value = Math.random() * 3;
    console.log(value);
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

// prints out computer's choice in the console
console.log(getComputerChoice());

// obtain human choice
function getHumanChoice() {
    let madeChoice = false;
    let humanChoice = ""
    while (madeChoice == false) {
        humanChoice = prompt("Input either Rock, Paper or Scissors (case insensitive)")
        console.log(humanChoice);
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice);
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            madeChoice = true;
            break;
        }
        else {
            console.log("Invalid input, please try again");
        }
    }
    return humanChoice;
}

console.log(getHumanChoice());