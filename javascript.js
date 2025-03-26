// write a function that randomly returns "rock", "paper", "scissor"
// prompt user for "rock", "paper", "scissor"
// execute the random function
// compare the results and prnit if the user won or lost

let humanScore = 0;
let computerScore = 0;
const possibleOutputs = ["rock", "paper", "scissor"]

function getComputerChoice() {
    return possibleOutputs[Math.floor(Math.random() * 10) % possibleOutputs.length]
}


function getHumanChoice() {
    let promptHuman = prompt("rock, paper or scissor? ")
    return promptHuman;
}


function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`human choice is ${humanChoice}, computer choice is ${computerChoice}`)

    if (
        (humanChoice === possibleOutputs[0] && computerChoice === possibleOutputs[1]) || 
        (humanChoice === possibleOutputs[1] && computerChoice === possibleOutputs[2]) || 
        (humanChoice === possibleOutputs[2] && computerChoice === possibleOutputs[0])) {
            console.log("human lost")
            computerScore++;
        } else if (
        (humanChoice === possibleOutputs[0] && computerChoice === possibleOutputs[2]) || 
        (humanChoice === possibleOutputs[1] && computerChoice === possibleOutputs[0]) || 
        (humanChoice === possibleOutputs[2] && computerChoice === possibleOutputs[1])) {
            console.log("computer lost")
            humanScore++;
        } else {
            console.log("tie")
    }
    console.log(`human score: ${humanScore}, computer score: ${computerScore}`);

}


playRound();