// global variables:
var playerMove;
var playerScore = 0;
var computerScore = 0;

function computerPlay() {
    // return one random selection from Rock, Paper, or Scissors options
    let selectionOptions = ["rock", "paper", "scissors"]
    return selectionOptions[Math.floor(Math.random() * selectionOptions.length)];
}

function title(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    
    // change case to all lower (case insensitive)
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // evaluate winner
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            // return a tie
            return `Tie! ${title(playerSelection)} ties ${title(computerSelection)}!`
        } 
        else if (computerSelection == "scissors") {
            // return a win
            return `You win! ${title(playerSelection)} beats ${title(computerSelection)}!`
        }
        else if (computerSelection == "paper") {
            // return a loss
            return `You lose! ${title(computerSelection)} beats ${title(playerSelection)}!`
        }
        else {return "Input is not a valid move."}
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            // return a tie
            return `Tie! ${title(playerSelection)} ties ${title(computerSelection)}!`
        }
        else if (computerSelection == "rock") {
            // return a win
            return `You win! ${title(playerSelection)} beats ${title(computerSelection)}!`
        }
        else if (computerSelection == "scissors") {
            // return a loss
            return `You lose! ${title(computerSelection)} beats ${title(playerSelection)}!`
        }
        else {return "Input is not a valid move."}
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            // return a tie
            return `Tie! ${title(playerSelection)} ties ${title(computerSelection)}!`
        }
        else if (computerSelection == "paper") {
            // return a win
            return `You win! ${title(playerSelection)} beats ${title(computerSelection)}!`
        }
        else if (computerSelection == "rock") {
            // return a loss
            return `You lose! ${title(computerSelection)} beats ${title(playerSelection)}!`
        }
        else {return "Input is not a valid move."}
    }
}

// To change the DOM:
const messageField = document.querySelector('#message');

function changeMessage (message) {
    messageField.textContent = message;
}

const playerScoreField = document.querySelector("#player-score");
const computerScoreField = document.querySelector("#cpu-score");

function changePlayerScoreField (num) {
    playerScoreField.textContent = num;
}

function changeComputerScoreField (num) {
    computerScoreField.textContent = num;
}

// reset capability:
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGame);


const buttons = document.querySelectorAll('.move');
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        console.log(e.target.id);
        playerMove = e.target.id;
        console.log(`player move is: ${playerMove}`);
        evaluate();
    })
})

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    changePlayerScoreField(playerScore);
    changeComputerScoreField(computerScore);

    changeMessage("Choose a move to start the game!");
}

// evaluate round and update DOM:
function evaluate() {

    if (playerScore < 3 & computerScore < 3) {
        resultString = playRound(playerMove, computerPlay());
        console.log(resultString);
        changeMessage(resultString);

        // check result to tally score:
        if (resultString.includes("win")) {
            playerScore += 1;
            changePlayerScoreField(playerScore);
        }
        else if (resultString.includes("lose")) {
            computerScore += 1;
            changeComputerScoreField(computerScore);
        }
        if (playerScore == 3) {
            changeMessage("You win the best of 5! Click reset.");
        }
        else if (computerScore == 3) {
            changeMessage("The CPU wins the best of 5! Click reset.");
        }
    }
}





