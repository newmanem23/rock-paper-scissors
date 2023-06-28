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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        switch (result.charAt(4)) {
            case "l":
                computerScore++;
                break;
            case "w":
                playerScore++;
        }
        console.log(`Computer: ${computerScore}\nPlayer: ${playerScore}`);
    }
    if (computerScore === playerScore) {
        console.log("It's a tie!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins.");
    } else {
        console.log("You win!");
    }
}

game();