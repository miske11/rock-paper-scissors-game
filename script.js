function getComputerChoice() {
    return Math.floor((Math.random() * 3)) + 1;
}

function playRound(playerSelection, computerSelection) {

    switch (computerSelection) {
        case 1: computerSelection = "rock";
            break;
        case 2: computerSelection = "paper";
            break;
        case 3: computerSelection = "scissors";
            break;
    }
    console.log(computerSelection);
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock.";
        }
        else if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors.";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock.";
        }
        else if (computerSelection == "scissors") {
            return "You Lose! Scissors beat Paper.";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You Win! Scissors beat Paper.";
        }
        else if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors.";
        }
    }
    return "You Tied with the computer!";
}

function calculateResult(letter) {
    switch (letter) {
        case 'W': return 1;
        case 'L':
        case 'T': return 0;
    }
}



const b1 = document.querySelector('#btn1');
const b2 = document.querySelector('#btn2');
const b3 = document.querySelector('#btn3');


let choice;
let score = 0;

function game() {
    let result;
    
    

    result = playRound(choice, getComputerChoice());
    console.log(result);

    let letter = result.substring(4, 5);
    score += calculateResult(letter);
    console.log("Your score is: " + score);

}


b1.addEventListener('click', () => {
    choice = "rock";
    game();
})

b2.addEventListener('click', () => {
    choice = "paper";
    game();
})

b3.addEventListener('click', () => {
    choice = "scissors";
    game();
})





