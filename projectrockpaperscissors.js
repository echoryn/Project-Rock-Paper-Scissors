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
let playerSelection = (prompt('Type Rock or Paper or Scissors')).toLowerCase();
console.log(playerSelection);

let computerSelection = getComputerChoice;
*/

//Test if if else statement is correct
playerSelection = 'rock';
computerSelection = 'paper';

if (playerSelection === 'rock' && computerSelection === 'paper') {
console.log ('You Win! Paper beats Rock!');
}

else {
console.log ('Nono');
}