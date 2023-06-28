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

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    switch (playerSelection){
        case "rock":
            return (computerSelection === "paper") ? computerSelection : playerSelection;
        case "paper":
            return (computerSelection === "scissors") ? computerSelection : playerSelection;
        case "scissors":
            return (computerSelection === "rock") ? computerSelection: playerSelection;
        }
    }

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
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