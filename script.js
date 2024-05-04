// initialize human and computer's scores, as well as round number as zero
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

// relate to scoreboard tag in html
const scoreboard = document.querySelector("#scoreboard");
// create element to display score
const displayScore = document.createElement("div");
// set initial content to initial score (0 for each player) and append to the scoreboard div
displayScore.textContent = "Current Score - You: " + humanScore + " Computer: " + computerScore;
scoreboard.appendChild(displayScore);
// create element to display winners of each round and the entire game respectively
const roundWinner = document.createElement("div");
scoreboard.appendChild(roundWinner);
const gameWinner = document.createElement("div");
gameWinner.textContent = "";
scoreboard.appendChild(gameWinner);

// event listener to check for clicks on the button area
let buttons = document.querySelector("#buttons");
buttons.addEventListener("click", makeChoice)
    
// function for event listener for rock, paper, scissors buttons
function makeChoice(event) {
    let target = event.target;
    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
    checkWinner();
}

// checks for winner each round, if 5 rounds have passed, then evaluate scores
function checkWinner () {
    if (roundNumber === 5) {
        // provides a button to reload the page to restart the game (appears only when all 5 rounds are finished)
        const reloadButton = document.createElement("button");
        reloadButton.textContent = "Click me or reload the page to restart the game!";
        scoreboard.appendChild(reloadButton);
        // event listener for reload button
        reloadButton.addEventListener("click", () => {
            location.reload();
        });
        // removes event listener for rock, paper, scissors options to prevent the game from going beyond round 5
        buttons.removeEventListener("click", makeChoice)
        // display when you win
        if (humanScore > computerScore) {
            gameWinner.textContent = "You win!";
        }
        // display when computer wins
        else if (computerScore > humanScore) {
            gameWinner.textContent = "Computer wins!";
        }
        // display when both parties have the same score
        else {
            gameWinner.textContent = "It's a draw!";
        }
    }
}

// function that returns either rock, paper, or scissors as the computer's choice
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
    // increases round number as soon as you click one of the options
    roundNumber += 1;
    // case where the round ends in a draw (both players choose the same)
    if (humanChoice === computerChoice) {
        roundWinner.textContent = "Draw! Both players chose " + humanChoice + ".";
    }
    // cases where the round ends in the human winning
    else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            // displays on console that human wins, adds their score by 1
            roundWinner.textContent = "You win! (" + humanChoice + " beats " + computerChoice + ")";
            humanScore += 1;
            
        }
    // cases where the round ends in the computer winning
    else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
            // displays on console that computer wins, adds their score by 1
            roundWinner.textContent = "Computer wins this round! (" + computerChoice + " beats " + humanChoice + ")";
            computerScore += 1;
        }
    else {
        return resultText = "Error";
    }
    // update score at the end of the round
    displayScore.textContent = "(Round " + roundNumber + ") Current Score - You: " + humanScore + " Computer: " + computerScore;
}