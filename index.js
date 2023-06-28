
function getComputerChoice() {
    let i = Math.floor(Math.random() * 100) % 3;
    console.log(i);
    switch (i) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
