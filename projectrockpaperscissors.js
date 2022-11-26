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