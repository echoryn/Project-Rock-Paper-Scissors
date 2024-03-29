//Observe the difference b/w console.log vs. return
function getComputerChoice() {
    let randomNum = (Math.floor(Math.random() * 3) + 1);

    if (randomNum === 1) {
        return('rock');
    }

    else if (randomNum === 2) {
        return('paper');
    }

    else if (randomNum === 3) {
        return('scissors');
    }
}

//Test if if else statement is correct
function playRound (playerSelection, computerSelection) {

    /*let playerSelection = (prompt('Type Rock or Paper or Scissors')).toLowerCase();
    console.log(playerSelection);

    let computerSelection = getComputerChoice();
    */

    if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log ('You Lose! Paper beats Rock!');
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log ('You Win!  Rock beats Scissors!');
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log ('You Win!  Scissors beats Paper!');
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log ('You Lose! Rock beats Scissors!');
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log ('You Lose! Scissors beats Paper!');
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log ('You Win! Paper beats Rock!');
    }

    else if (playerSelection === 'paper' && computerSelection === 'paper') {
    console.log ("It's a Tie");
    }

    else if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log ("It's a Tie");
    }

    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    console.log ("It's a Tie");
    }

    else {
    console.log ('Did you type that correctly? Please try again');
    }
}

const playerSelection = (prompt('Type Rock or Paper or Scissors')).toLowerCase();
console.log(playerSelection);

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
//return the results of this function call, NOT console.log() because we'll use what you return later on

function game () {
    for (let i = 0; i < 5; i++) {
        playRound (playerSelection, computerSelection);
        
        console.log (`Round ${i+1}`);
    
    }
}

console.log(game ());