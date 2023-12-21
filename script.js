function getComputerChoice() 
{
   return Math.floor((Math.random() * 3)) + 1;
}

function getRoundResult(playerSelection, computerSelection) 
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

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
}

console.log(getRoundResult("rock","rock"));