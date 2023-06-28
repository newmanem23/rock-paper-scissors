const computerSelection = getComputerChoice();
const playerSelection = "scissors";

function getComputerChoice() {
    let i = Math.floor(Math.random() * 100) % 3;
    switch (i) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Both ${playerSelection}, you tied!`;
    }
    switch (playerSelection){
        case "rock":
            if (computerSelection === "paper") {
                return "You lose, paper covers rock!";
            }
            return "You win, rock beats scissors!";
        
        case "paper":
            if (computerSelection === "scissors") {
                return "You lose, scissors cuts paper!";
            }
            return "You win, paper covers rocks!";
        
        case "scissors":
            if (computerSelection === "rock") {
                return "You lose, rock beats scissors!";
            }
            return "You win, scissors cuts paper";
    }
}




