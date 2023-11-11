const ROCK = 0, PAPER = 1, SCISSORS = 2;

function getComputerChoice () {

    //randomly select a number that represents rock, paper, or scissors
    //and assign to choice variable
    let choice = Math.floor(Math.random() * 3);

    //if choice is equal to number chosen to represent that output 
    //then return that selection
    if (choice === ROCK) {
        return "rock";
    } else if (choice === PAPER) {
        return "paper";
    } else {
        return "scissors";
    }

}

