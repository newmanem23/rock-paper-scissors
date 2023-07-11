function getComputerChoice() {
    let i = Math.floor(Math.random() * 100) % 3;
    switch (i) {
        case 0:
            return "Rock";
        case 1:
            return "Scissors";
        case 2:
            return "Paper";
    }
}

function playRound(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = getComputerChoice();
    let winner = determineWinner(playerSelection, computerSelection);
    console.log(`Computer: ${computerSelection}\nPlayer: ${playerSelection}`);
    switch(winner) {
        case playerSelection:
            playerScore++;
            break;
        case computerSelection:
            computerScore++;
            break;
        default: 
            break;
    }
    updateScores(playerScore, computerScore);
}

function determineWinner(playerSelection, computerSelection) {
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

function updateScores(playerScore, computerScore) {
    let scoreDisplay = document.querySelector('.score-container');
    scoreDisplay.innerText = `Player: ${playerScore}\nComputer: ${computerScore}`;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));
let playerScore = 0;
let computerScore = 0;
