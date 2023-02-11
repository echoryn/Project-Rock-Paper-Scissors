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

function playRound(player, computer) {
    
    let oneRound = 
     (player === 'rock') && (computer === 'paper') ? computerScore++ :
     (player === 'rock') && (computer === 'scissors') ? playerScore++ :
    /* (player === 'rock') && (computer === 'rock') ? "It's a Tie" :
     (player === 'scissors') && (computer === 'rock') ? "Computer Wins" :
     (player === 'scissors') && (computer === 'paper') ? "Player Wins" :
     (player === 'scissors') && (computer === 'scissors') ? "It's a Tie" :
     (player === 'paper') && (computer === 'rock') ? "Player Wins" :
     (player === 'paper') && (computer === 'paper') ? "It's a Tie" :
     (player === 'paper') && (computer === 'scissors') ? "Computer Wins" :
     'Try Again'; 
     */
     return (oneRound);
 }

/* const player = "rock"; */
/* const computer = getComputerChoice(); */
/* console.log(player, computer, playRound (player, computer)); */

let playerScore = 0;
let computerScore = 0; 

function game() {
 for (let i = 0; i < 5; i++) {
 
    let player = 'rock';
    let computer = 'scissors';

/*    let playerAnswer = prompt ('Please enter Rock, Paper, or Scissors');
    let player = playerAnswer.toLowerCase();
    let computer = getComputerChoice(); */

    console.log(player, computer, i, playRound (player, computer));

    if (playRound === 'Player Wins') {
        playerScore++;
    }
    else if (playRound === 'Computer Wins') {
        computerScore++;
    }

    console.log(playerScore, computerScore);
    }
}

game();

/*Below function check why if console log is deleted, 
meaning only playRound is left, 
when game(); function is called in the console,
it returns undefined,
even if playRound function has console.log command to display the results.
Maybe should use return?
*/

/*
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(player, computer);
        console.log(i, player, computer, playRound (player, computer));
        }    
    }
*/