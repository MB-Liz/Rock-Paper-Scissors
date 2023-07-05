const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const roundText = document.querySelectorAll(".bottom-container");
const playerChoice = document.querySelectorAll(".player-choice");
const computerChoice = document.querySelectorAll(".computer-choice");
let choices = [
    "rock",
    "paper",
    "scissors"
];
// [wins, loses]
let winConditions = [
    ["rock","scissors", "You WON by CRUSHING your enemy scissors with ROCK"],
    ["paper", "rock", "You WON by BLINDING your enemy rock with PAPER"],
    ["scissors", "paper", "You WON by CUTTING your enemy paper with SCISSORS"],
    ["rock","paper", "You LOST BLINDED"],
    ["paper", "scissors", "You LOST PIECES"],
    ["scissors", "rock", "You LOST DESTROYED"]
]

console.log(choices);
let playerSelection, computerSelection;

console.log(playerScore.textContent);
console.log(computerScore.textContent);
console.log(roundText.textContent);
computerSelection = getComputerChoice(computerSelection, ...choices);
playerSelection = "rock";
executeGame(playerSelection, computerSelection);

//roundText.forEach (element) => element.addEventListener("click", )

function getComputerChoice(computerSelection, ...choices){
    let index = Math.floor(Math.random()* 3);
    computerSelection = choices[index];
    console.log(computerSelection);
    return computerSelection;
}
function executeGame(playerSelection, computerSelection){
    for (winCondition of winConditions){
        if (playerSelection == winCondition[0] && computerSelection == winCondition[1]){
            console.log(winCondition[2]);
        }
        else if(playerSelection == computerSelection){
            console.log("tie");
        }
    }
}