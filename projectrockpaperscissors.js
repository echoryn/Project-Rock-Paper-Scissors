/*
function getComputerChoice() {
    let randomNum = (Math.floor(Math.random() * 3) + 1);

    if (randomNum === 1) {
        console.log(randomNum + ' Rock');
    }

    else if (randomNum === 2) {
        console.log(randomNum + ' Paper');
    }

    else if (randomNum === 3) {
        console.log(randomNum + ' Scissors');
    }
}

getComputerChoice();
*/

/*
let computerSelection = getComputerChoice;
*/


//Test if if else statement is correct
let playerSelection = (prompt('Type Rock or Paper or Scissors')).toLowerCase();
console.log(playerSelection);

computerSelection = 'paper';

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