function getComputerChoice() {
    let randomNum = (Math.floor(Math.random() * 3) + 1);

    if (randomNum === 1) {
        console.log('rock');
    }

    else if (randomNum === 2) {
        console.log('paper');
    }

    else if (randomNum === 3) {
        console.log('scissors');
    }
}

getComputerChoice();


//Test if if else statement is correct
let playerSelection = (prompt('Type Rock or Paper or Scissors')).toLowerCase();
console.log(playerSelection);

let computerSelection = getComputerChoice();

if (playerSelection === 'rock' && getComputerChoice() === 'paper') {
console.log ('You Lose! Paper beats Rock!');
}

else if (playerSelection === 'rock' && getComputerChoice() === 'scissors') {
console.log ('You Win!  Rock beats Scissors!');
}

else if (playerSelection === 'scissors' && getComputerChoice() === 'paper') {
console.log ('You Win!  Scissors beats Paper!');
}

else if (playerSelection === 'scissors' && getComputerChoice() === 'rock') {
console.log ('You Lose! Rock beats Scissors!');
}

else if (playerSelection === 'paper' && getComputerChoice() === 'scissors') {
console.log ('You Lose! Scissors beats Paper!');
}

else if (playerSelection === 'paper' && getComputerChoice() === 'rock') {
console.log ('You Win! Paper beats Rock!');
}

else if (playerSelection === 'paper' && getComputerChoice() === 'paper') {
    console.log ("It's a Tie");
}

else if (playerSelection === 'rock' && getComputerChoice() === 'rock') {
    console.log ("It's a Tie");
}

else if (playerSelection === 'scissors' && getComputerChoice() === 'scissors') {
    console.log ("It's a Tie");
}

else {
    console.log ('Did you type that correctly? Please try again');
}