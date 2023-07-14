const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const roundText = document.querySelector(".round-texts");
const playerChoice = document.querySelectorAll(".player-choice");
const computerChoice = document.querySelectorAll(".computer-choice");
let playerSelection, computerSelection;
let playerScore = 0, computerScore = 0;
let choices = [
    "rock",
    "paper",
    "scissors"
];
// [wins, loses, text]
let winConditions = [
    ["rock","scissors", 1, "You WON by CRUSHING your enemy scissors with ROCK"],
    ["paper", "rock", 1, "You WON by BLINDING your enemy rock with PAPER"],
    ["scissors", "paper", 1, "You WON by CUTTING your enemy paper with SCISSORS"],
    ["rock","paper", 0, "You LOST BLINDED"],
    ["paper", "scissors", 0, "You LOST PIECES"],
    ["scissors", "rock", 0, "You LOST DESTROYED"]
]
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
                
                break;
            case playerChoice[1]:
                console.log("paper click");
                playerSelection = "paper";
                break;
            case playerChoice[2]:
                console.log("scissors click");
                playerSelection = "scissors";
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
            console.log("tie");
            const boxText = document.createElement("div");
            boxText.innerHTML = 'tie';
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
                    roundText.appendChild(boxText);
                    if (winCondition[2] == 1){
                        playerScore += 1;
                        scoreUpdate();
                    }
                    else{
                        computerScore += 1;
                        scoreUpdate();
                    }
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
            running = false;
            console.log("Final YOU WON DEFEATED EWMY");
        }
        else if (computerScore == 5){
            running = false;
            console.log("Final DEFEATED");
        }
    }
}