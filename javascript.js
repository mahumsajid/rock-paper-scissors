//numbers respresenting the options to be randomly selected
const ROCK = 0, PAPER = 1, SCISSORS = 2;

//function to get computer's selection
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

//function to play one round of game
function playRound (playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie!";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        } else {

            return "You win! Rocks beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            //playerScore++;
            return "You win! Paper beats Rock";
        } else if (computerSelection === "paper") {
            return "It's a tie!";
        } else {
            //compScore++;
            return "You lose! Scissors beat Paper";
        }
    } else {
        if (computerSelection === "rock") {
            //compScore++;
            return "You lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            //playerScore++;
            return "You win! Scissors beats Paper";
        } else {
            return "It's a tie!";
        }
    }
}

//function for game play
function game () {
    
    let playerSelection;
    let computerSelection;

    let round = 1;

    let playerScore = 0;
    let compScore = 0;

    //if true continue playing
    let play = false;

    //gameUI();

    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
    let div = document.querySelector('.container');

    //rock.classList.add("rock");
    //paper.classList.add("paper");
    //scissors.classList.add("scissors");

    rock.textContent = "rock";
    paper.textContent = 'paper';
    scissors.textContent = 'scissors';

    div.appendChild(rock);
    div.appendChild(paper);
    div.appendChild(scissors);

    //console.log(playerSelection);
    

        //helper function for addEventListener to choose rock, paper, or scissors 
    //when corresponding button clicked

    //allow to continuously play game until player decides to quit
    do {
        
        //while (round < 5) {

       // }
        
        /*let continuePlay = prompt("Do you want to try again? Enter YES or NO\n");
        continuePlay = continuePlay.toLowerCase();

        if (continuePlay === "no") {
            play = false;
        }
        */
        
        

    } while (play);
}

game();


