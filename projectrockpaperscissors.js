/* function getComputerChoice () {
const randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber === 1) {
    console.log ( 'rock' );
}
else if (randomNumber === 2) {
    console.log ( 'paper' );
}
else if (randomNumber === 3) {
    console.log ( 'scissors' );
}
else {
    console.log ( 'Try again' );
}
}
*/

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerAnswer =
    (randomNumber === 1) ? 'rock':
    (randomNumber === 2) ? 'paper':
    (randomNumber === 3) ? 'scissors':
    'Try Again';
    
    return (computerAnswer);
}

let playerAnswer = prompt ('Please enter Rock, Paper, or Scissors');
let player = playerAnswer.toLowerCase();

function playRound(player, computer) {
    
    let oneRound = 
     (player === 'rock') && (computer === 'paper') ? 'Computer Wins' :
     (player === 'rock') && (computer === 'scissors') ? 'Player Wins' :
     (player === 'rock') && (computer === 'rock') ? "It's a Tie" :
     (player === 'scissors') && (computer === 'rock') ? "Computer Wins" :
     (player === 'scissors') && (computer === 'paper') ? "Player Wins" :
     (player === 'scissors') && (computer === 'scissors') ? "It's a Tie" :
     (player === 'paper') && (computer === 'rock') ? "Player Wins" :
     (player === 'paper') && (computer === 'paper') ? "It's a Tie" :
     (player === 'paper') && (computer === 'scissors') ? "Computer Wins" :
     'Try Again'; 
     
     return (oneRound);
 }
 
 let computer = getComputerChoice();
 console.log(player, computer, playRound(player, computer));

 for (let i = 0; i < 5; i++) {
    console.log (i);