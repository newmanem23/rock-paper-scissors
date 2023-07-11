function getComputerChoice() {
    let i = Math.floor(Math.random() * 100) % 3;
    switch (i) {
        case 0: return "Rock";
        case 1: return "Scissors";
        case 2: return "Paper";
    }
}

function playRound(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = getComputerChoice();
    let winner = determineRoundWinner(playerSelection, computerSelection);
    let message = document.querySelector('.message');

    switch(winner) {
        case playerSelection:
            message.innerText = `You win! ${playerSelection} beats ${computerSelection}.`;
            playerScore++;
            break;
        case computerSelection:
            message.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`;
            computerScore++;
            break;
        default: 
            message.innerText = `Both ${playerSelection}, it's a tie!`;
            break;
    }
    updateScoreDisplay(playerScore, computerScore);
    checkGameWinner();
}

function determineRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "tie";
    switch (playerSelection){
        case "Rock":
            return (computerSelection === "Paper") ? 
            computerSelection : playerSelection;
        case "Paper":
            return (computerSelection === "Scissors") ? 
            computerSelection : playerSelection;
        case "Scissors":
            return (computerSelection === "Rock") ? 
            computerSelection: playerSelection;
        }
}

function updateScoreDisplay(playerScore, computerScore) {
    let scoreDisplay = document.querySelector('.score-container');
    scoreDisplay.innerText = `Player: ${playerScore}\nComputer: ${computerScore}`;
}

function checkGameWinner() {
    if (computerScore !== 5 && playerScore !== 5) return;
    let message = document.querySelector('.winner');
    if (computerScore === 5) {
        message.innerText = ' Computer wins!';
    }
    else {
        message.innerText = ' You win!';
    }
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.setAttribute("disabled", "");
}

let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));
