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

function playRound (playerSelection, computerSelection, scores) {

    if ((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        
        //add to player's score by 1
        scores[0] = scores[0] + 1;

    } else if ((playerSelection === "rock" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
            
        //add to computer's score by 1
        scores[1] = scores[1] + 1;
        
    }

}

//function for game play
function game () {
    
    let playerSelection;
    let computerSelection;

    let round = 1;

    //scores where index 0 shows the player's score and index 1 shows the computer's
    let scores = [0, 0];

    //if true continue playing
    let play = false;

    //gameUI();

    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
    let container = document.querySelector(".container");

    rock.textContent = "ROCK";
    paper.textContent = "PAPER";
    scissors.textContent = "SCISSORS";

    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);

    let displayMsg = document.createElement("h2");

    displayMsg.setAttribute("style", "white-space: pre;");

    displayMsg.textContent = "Best out of 5\r\nSelect Rock, Paper, or Scissors to Start";
    let display = document.querySelector(".display");
    display.appendChild(displayMsg);
    let h1 = document.querySelector("h1");
    let scoresDisplay = document.querySelectorAll(".score");
    let header = document.querySelector("header");
    

    //allow to continuously play game until player decides to quit

        function playerButtonSelection (event) {

            if (round === 1) {
                header.style.justifyContent = "space-between";
                scoresDisplay.forEach((scoreDisplay) => {
                        scoreDisplay.style.width = "24vw";
                        scoreDisplay.style.fontSize = "2vw";
                        scoreDisplay.style.margin = "0 40px";
                    }
                );
            }

            if (round <= 5) {
                display.removeChild(displayMsg);
                h1.textContent = "ROUND " + round;
                playerSelection = event.target.textContent.toLowerCase();
                computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection, scores);
                displayMsg.textContent = playerSelection.toUpperCase() + "\r\tvs\r\t" +
                    computerSelection.toUpperCase();
                display.appendChild(displayMsg);
                let playerScore = document.querySelector(".player-score");
                let compScore = document.querySelector(".comp-score");
                playerScore.textContent = scores[0];
                compScore.textContent = scores[1];
                round++;
            }

            if (round > 5) {
                rock.removeEventListener("click", playerButtonSelection);
                paper.removeEventListener("click", playerButtonSelection);
                scissors.removeEventListener("click", playerButtonSelection);

                setTimeout(() => {
                    if (scores[0] > scores[1]) {
                        displayMsg.textContent = "You Win!";
                    } else if (scores[0] < scores[1]) {
                        displayMsg.textContent = "You Lose";
                    } else {
                        displayMsg.textContent = "It's a Tie!";
                    }
                }, 1500);

                //display.appendChild(displayMsg);
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


