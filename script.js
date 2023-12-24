let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let computerChoice = Math.floor((Math.random() * 3)) + 1;

    switch (computerChoice) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            ++computerScore;
        }
        else if (computerSelection == "scissors") {
            ++playerScore;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            ++playerScore
        }
        else if (computerSelection == "scissors") {
            ++computerScore;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            ++playerScore;
        }
        else if (computerSelection == "rock") {
            ++computerScore;
        }
    }
}

const b1 = document.querySelector('#btn1');
const b2 = document.querySelector('#btn2');
const b3 = document.querySelector('#btn3');

const main = document.createElement('div');
const buttons = document.querySelector('.buttons');
const body = document.querySelector('body');
const resultDisplay = document.createElement('div');



body.appendChild(main);
main.appendChild(buttons);
main.appendChild(resultDisplay);


main.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex-direction: column;');
body.setAttribute('style', 'display: flex; justify-content: center; align-items: center; height: 600px;');



function disableButtons() {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
}

function game() {


    resultDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;


    if (playerScore == 5) {
        resultDisplay.textContent = "Player wins!";
        disableButtons();
        return;
    }
    if (computerScore == 5) {
        resultDisplay.textContent = "Computer wins!";
        disableButtons();
        return;
    }

}


b1.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
    game();
})

b2.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
    game();
})

b3.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
    game();
})


game();







