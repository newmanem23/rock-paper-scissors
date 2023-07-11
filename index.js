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
            return (computerSelection === "paper") ? 
            computerSelection : playerSelection;
        case "paper":
            return (computerSelection === "scissors") ? 
            computerSelection : playerSelection;
        case "scissors":
            return (computerSelection === "rock") ? 
            computerSelection: playerSelection;
        }
    }

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let winner = determineWinner(playerSelection, computerSelection);

        switch (winner) {
            case playerSelection:
                console.log(
                    `You win! ${playerSelection} beats ${computerSelection}`
                    )
                playerScore++;
                break;
            case computerSelection:
                console.log(
                    `You lose! ${computerSelection} beats ${playerSelection}`
                    )
                computerScore++;
                break;
            default:
                console.log(`Both ${playerSelection}, you tie!`);
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