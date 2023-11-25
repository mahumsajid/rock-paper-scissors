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
        
        //add to player's score
        scores[0] = scores[0] + 1;

    } else if ((playerSelection === "rock" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
            
        //add to computer's score
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
    let body = document.querySelector("body");
    let playerScore = document.querySelector(".player-score");
    let compScore = document.querySelector(".comp-score");
    let playAgain = document.createElement("button");
    let btnContainer = document.createElement("div");

    playAgain.textContent = "PLAY AGAIN?";
    playAgain.classList.add("play-again");
    btnContainer.classList.add("btnContainer");

    btnContainer.appendChild(playAgain);

    function playerButtonSelection (event) {

        //change from title to display rounds
        if (round === 1) {
            header.style.justifyContent = "space-between";
            scoresDisplay.forEach((scoreDisplay) => {
                scoreDisplay.style.width = "24vw";
                scoreDisplay.style.fontSize = "2vw";
                scoreDisplay.style.margin = "0 40px";
            });
        }

        if (round <= 5) {
            h1.style.fontSize = "5vw";
            h1.textContent = "ROUND " + round;
            
            playerSelection = event.target.textContent.toLowerCase();
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection, scores);
            
            displayMsg.textContent = playerSelection.toUpperCase() + "\tvs.\t" + 
            computerSelection.toUpperCase();
            displayMsg.style.fontSize = "6vw";
            
            playerScore.textContent = scores[0];
            compScore.textContent = scores[1];
            round++;
        }

        if (round === 6) {
            
            round++;
            setTimeout(() => {
                
                if (scores[0] > scores[1]) {
                    displayMsg.textContent = "You Win!";
                } else if (scores[0] < scores[1]) {
                    displayMsg.textContent = "You Lose :(";
                } else {
                    displayMsg.textContent = "It's a Tie!";
                }
                displayMsg.style.fontSize = "7vw";

                if (event.target.style.border) event.target.style.removeProperty("border");
                body.removeChild(container);
                body.appendChild(btnContainer);

            }, 1100);

        } 

    }
    
    container.addEventListener('mouseover', (event) => {
        if (event.target.nodeName === "BUTTON") {
            event.target.addEventListener('click', playerButtonSelection);
        }
    });
    
    container.addEventListener('mouseover', (event) => {
        if (event.target.nodeName === "BUTTON") {
            event.target.style.border = "solid 16px plum";
        }
    });

    
    container.addEventListener('mouseout', (event) => {
        if (event.target.nodeName === "BUTTON") {
            event.target.style.removeProperty("border");
        }
    });
    
    //reset scores and text
    playAgain.addEventListener("click", () => {
        body.removeChild(btnContainer);
        body.appendChild(container);
        round = 1;
        scores[0] = 0;
        scores[1] = 0;
        displayMsg.textContent = "Best out of 5\r\nSelect Rock, Paper, or Scissors to Start";
        displayMsg.style.fontSize = "3.5vw";
        h1.textContent = "ROUND " + round;
        playerScore.textContent = scores[0];
        compScore.textContent = scores[1];
    });
        
}

game();


