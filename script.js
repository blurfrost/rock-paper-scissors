// initialize human and computer's scores as zero
let humanScore = 0;
let computerScore = 0;

let gameResult = playGame();
    
function playGame() {
    let n = 0;
    while (n < 5) {
        // prints out human's choice in the console
        let humanChoice = getHumanChoice();

        // prints out computer's choice in the console
        let computerChoice = getComputerChoice();

        // plays out a single round
        let roundResult = playRound(humanChoice, computerChoice);
        console.log("Human's choice: " + humanChoice + '\n' + "Computer's choice: " + computerChoice + '\n' + roundResult);
        console.log("Score for round " + (n + 1) + '\n' + "Human: " + humanScore + '\n' + "Computer: " + computerScore)
        
        // increment n with each round, until it hits 4 (round 5)
        n += 1;
    }
    // display when human wins
    if (humanScore > computerScore) {
        console.log("Final score" + '\n' + "Human: " + humanScore + '\n' + "Computer: " + computerScore + '\n' + "Human wins!")
    }
    // display when computer wins
    else if (computerScore > humanScore) {
        console.log("Final score" + '\n' + "Human: " + humanScore + '\n' + "Computer: " + computerScore + '\n' + "Computer wins!")
    }
    // display when both parties have the same score
    else {
        console.log("Final score" + '\n' + "Human: " + humanScore + '\n' + "Computer: " + computerScore + '\n' + "It's a draw!")
    }
}

// function to obtain human choice
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

function playRound(humanChoice, computerChoice) {
    let resultText = "";
    // case where the round ends in a draw (both players choose the same)
    if (humanChoice === computerChoice) {
        resultText = "Draw! Both players chose " + humanChoice + ".";
        return resultText;
    }
    // cases where the round ends in the human winning
    else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            // displays on console that human wins, adds their score by 1
            resultText = humanChoice + " beats " + computerChoice + ", Human wins!";
            humanScore += 1;
            return resultText;
        }
    // cases where the round ends in the computer winning
    else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
            // displays on console that computer wins, adds their score by 1
            resultText = computerChoice + " beats " + humanChoice + ", Computer wins!";
            computerScore += 1;
            return resultText;
        }
    else {
        return resultText = "Error";
    }
}