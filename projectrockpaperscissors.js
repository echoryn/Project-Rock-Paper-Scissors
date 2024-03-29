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
     (player === 'rock') && (computer === 'rock') ? "It's a Tie" :
     (player === 'scissors') && (computer === 'rock') ? computerScore++ :
     (player === 'scissors') && (computer === 'paper') ? playerScore++ :
     (player === 'scissors') && (computer === 'scissors') ? "It's a Tie" :
     (player === 'paper') && (computer === 'rock') ? playerScore++ :
     (player === 'paper') && (computer === 'paper') ? "It's a Tie" :
     (player === 'paper') && (computer === 'scissors') ? computerScore++ :
     'Try Again'; 
     
     return (oneRound);
 }

let playerScore = 0;
let computerScore = 0; 

function game() {
 for (let i = 1; i < 6; i++) {
 
    let playerAnswer = prompt ('Please enter Rock, Paper, or Scissors'); //playerAnswer should be inside for loop or else if moved outside, for loop will repeat 5 times with the same answer
    let player = playerAnswer.toLowerCase();
    let computer = getComputerChoice(); 
    playRound (player, computer);
    console.log('round ' + i, player, computer);
    console.log(playerScore, computerScore);
    
    //Have to add (i===5), if not it will display for every round
    if ((i === 5) && (playerScore > computerScore)) {
    console.log('Player Wins');
    } else if ((i === 5) && (computerScore > playerScore)) {
    console.log('Computer Wins');
    } else if ((i===5) && (computerScore === playerScore)) {
    console.log("It's a Tie");
    }
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