function getComputerChoice(randomNum) {
    randomNum = Math.floor((Math.random() * 6) + 1);
    console.log(randomNum);
    
    if (randomNum > 0 <= 4) {
    console.log ('Blahblah'); 
    }
        
    else {
    console.log ('Other');
    }
    
console.log (getComputerChoice (randomNum));
}

/* 
    Function needs to
        Generate a random WHOLE number from 1-3
        If it is = 1, print Rock
        If it is = 2, print Paper
        If it is = 3, print Scissors
*/
