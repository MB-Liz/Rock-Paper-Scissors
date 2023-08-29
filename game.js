const mainContainer = document.querySelector(".main-container");
const messageContainer = document.querySelectorAll(".message-container");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const roundText = document.querySelector(".round-texts");
const playerChoice = document.querySelectorAll(".player-choice");
const computerChoice = document.querySelectorAll(".computer-choice");
const playerFinalChoice = document.querySelectorAll(".player-final-choice");
const computerFinalChoice = document.querySelectorAll(".computer-final-choice");
let playerSelection, computerSelection;
let playerScore = 0, computerScore = 0;
let choices = [
    "rock",
    "paper",
    "scissors"
];
// [wins, loses, text]
let winConditions = [
    ["rock","scissors", 1, "You WON: ROCK :: SCISSORS"],
    ["paper", "rock", 1, "You WON: PAPER :: ROCK"],
    ["scissors", "paper", 1, "You WON: SCISSORS :: PAPER"],
    ["rock","paper", 0, "You LOST: ROCK :: PAPER"],
    ["paper", "scissors", 0, "You LOST: PAPER :: SCISSORS"],
    ["scissors", "rock", 0, "You LOST: SCISSORS :: ROCK"]
]
mainContainer.style.visibility = "visible";
messageContainer[0].style.visibility = "hidden";
messageContainer[1].style.visibility = "hidden";
playerFinalChoice[0].style.visibility = "hidden";
playerFinalChoice[1].style.visibility = "hidden";
playerFinalChoice[2].style.visibility = "hidden";
computerFinalChoice[0].style.visibility = "hidden";
computerFinalChoice[1].style.visibility = "hidden";
computerFinalChoice[2].style.visibility = "hidden";

let running = false;

initializeGame();

function initializeGame(){
    playerChoice.forEach (choice => choice.addEventListener ("click", () => {
        playerSelection = getPlayerChoice(choice, playerSelection, ...choices);
        computerSelection = getComputerChoice(computerSelection, ...choices);
        executeGameRound(playerSelection, computerSelection);
        game();
    }));
    running = true;
    console.log("its run");
};
//roundText.forEach (element) => element.addEventListener("click", )

function getComputerChoice(computerSelection, ...choices){
    if (running){
        let index = Math.floor(Math.random()* 3);
        computerSelection = choices[index];
        for (let i = 0; i < 3; i++){
            if (i == index){
                computerFinalChoice[i].style.visibility = "visible";
            }
            else{
                computerFinalChoice[i].style.visibility = "hidden";
            }
        }
        console.log(computerSelection + "computer");
        return computerSelection;
    }
}
function getPlayerChoice(choice, playerSelection, ...choices){
    if (running){
        console.log("click element");
        switch (choice){
            case playerChoice[0]:
                console.log("rock click");
                playerSelection = "rock";
                playerFinalChoice[0].style.visibility = "visible";
                playerFinalChoice[1].style.visibility = "hidden";
                playerFinalChoice[2].style.visibility = "hidden";
                break;
            case playerChoice[1]:
                console.log("paper click");
                playerSelection = "paper";
                playerFinalChoice[0].style.visibility = "hidden";
                playerFinalChoice[1].style.visibility = "visible";
                playerFinalChoice[2].style.visibility = "hidden";
                break;
            case playerChoice[2]:
                console.log("scissors click");
                playerSelection = "scissors";
                playerFinalChoice[0].style.visibility = "hidden";
                playerFinalChoice[1].style.visibility = "hidden";
                playerFinalChoice[2].style.visibility = "visible";
                break;
            default:
                console.log("error");
        }
        return playerSelection;
    }
}
function executeGameRound(playerSelection, computerSelection){
    if (running){
        if(playerSelection == computerSelection){
            console.log("TIE");
            const boxText = document.createElement("div");
            boxText.innerHTML = 'TIE';
            boxText.classList.add("boxText");
        
            roundText.appendChild(boxText);
        }
        else{
            for (winCondition of winConditions){
                if (playerSelection == winCondition[0] && computerSelection == winCondition[1]){
                    console.log(winCondition[3]);
                    const boxText = document.createElement("div");
                    boxText.innerHTML = winCondition[3];
                    boxText.classList.add("boxText");
                    
                    if (winCondition[2] == 1){
                        playerScore += 1;
                        boxText.style.backgroundColor = "#c6f090";
                        scoreUpdate();
                    }
                    else{
                        computerScore += 1;
                        boxText.style.backgroundColor = "#fc7f78";
                        scoreUpdate();
                    }
                    roundText.appendChild(boxText);
                }
                }
        }
    }
}
function scoreUpdate(){
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}
function game(){
    if (running){
        if ((playerScore < 5 && computerScore < 5) && running){
            running = true;
        }
        else if (playerScore == 5){
            //messageContainer.textContent = "You won and have gained the Amulet of Power";
            messageContainer[1].style.visibility = "visible";
            mainContainer.style.visibility = "hidden";
            for(let i = 0; i < 3; i++){
                playerFinalChoice[i].style.visibility = "hidden";
                computerFinalChoice[i].style.visibility = "hidden";
            }
            running = false;
            console.log("Final YOU WON DEFEATED EnemY");
        }
        else if (computerScore == 5){
            //messageContainer.textContent = "You lost, now the universe is destroyed";
            messageContainer[0].style.visibility = "visible";
            mainContainer.style.visibility = "hidden";
            for(let i = 0; i < 3; i++){
                playerFinalChoice[i].style.visibility = "hidden";
                computerFinalChoice[i].style.visibility = "hidden";
            }
            running = false;
            console.log("Final DEFEATED");
        }
    }
}