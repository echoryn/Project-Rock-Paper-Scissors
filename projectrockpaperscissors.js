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

let oneRound = (player === 'rock') && (computer === 'paper') ? 'Computer Wins' :
    (player === 'rock') && (computer === 'scissors') ? 'Player Wins' :
    (player === 'rock') && (computer === 'rock') ? "It's a Tie" :
    (player === 'scissors') && (computer === 'rock') ? "Computer Wins" :
    (player === 'scissors') && (computer === 'paper') ? "Player Wins" :
    (player === 'scissors') && (computer === 'scissors') ? "It's a Tie" :
    (player === 'paper') && (computer === 'rock') ? "Player Wins" :
    (player === 'paper') && (computer === 'paper') ? "It's a Tie" :
    (player === 'paper') && (computer === 'scissors') ? "Computer Wins" :
    'Try Again'; 
