const ROCK = 0, PAPER = 1, SCISSORS = 2;

function getComputerChoice () {

    //randomly select a number that represents rock, paper, or scissors
    let choice = Math.floor(Math.random() * 3);

    if (choice === ROCK) {
        return "rock";
    } else if (choice === PAPER) {
        return "paper";
    } else {
        return "scissors";
    }

}

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
    let div = document.querySelector(".container");

    //rock.classList.add("rock");
    //paper.classList.add("paper");
    //scissors.classList.add("scissors");

    rock.textContent = "ROCK";
    paper.textContent = "PAPER";
    scissors.textContent = "SCISSORS";

    div.appendChild(rock);
    div.appendChild(paper);
    div.appendChild(scissors);

    let endMsg = document.createElement("h2");
    

    //console.log(playerSelection);
    

        //helper function for addEventListener to choose rock, paper, or scissors 
    //when corresponding button clicked

    //allow to continuously play game until player decides to quit

        function playerButtonSelection (event) {

            if (round <= 5) {
                playerSelection = event.target.textContent.toLowerCase();
                computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
                round++;
            }

            
            if (round > 5) {
                rock.removeEventListener("click", playerButtonSelection);
                paper.removeEventListener("click", playerButtonSelection);
                scissors.removeEventListener("click", playerButtonSelection);
                //continuePlay();
            }
            
            
    
            console.log(round);
    
        }
    
        rock.addEventListener('click', playerButtonSelection);
        paper.addEventListener('click', playerButtonSelection);
        scissors.addEventListener('click', playerButtonSelection);
        
        /*let continuePlay = prompt("Do you want to try again? Enter YES or NO\n");
        continuePlay = continuePlay.toLowerCase();

        if (continuePlay === "no") {
            play = false;
        }
        */
        
}

function continuePlay () {

    let playAgain = document.createElement("button");
    let display = document.querySelector(".display");

    playAgain.textContent = "Play Again?";

    display.appendChild(playAgain);

    playAgain.addEventListener("click", game);
    
}

game();


