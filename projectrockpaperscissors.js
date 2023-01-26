function getComputerChoice () {
const randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber === 1) {
    console.log ( 'Rock' );
}
else if (randomNumber === 2) {
    console.log ( 'Paper' );
}
else if (randomNumber === 3) {
    console.log ( 'Scissors' );
}
else {
    console.log ( 'Try again' );
}
}

let playerAnswer = prompt ('Please enter Rock, Paper, or Scissors');
let playerSelection = playerAnswer.toLowerCase();

let player = 'rock'
let computer = 'paper'

let oneRound = (player === 'rock') && (computer === 'paper') ? 'Player Wins' :
    'Computer Wins'; 
