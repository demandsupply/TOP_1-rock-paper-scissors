// write a function that randomly returns "rock", "paper", "scissor"
// prompt user for "rock", "paper", "scissor"
// execute the random function
// compare the results and print if the user won or lost
// play the game 5 times and output the final winner

let humanScore = 0;
let computerScore = 0;
const possibleOutputs = ["rock", "paper", "scissor"]

function getComputerChoice() {
    return possibleOutputs[Math.floor(Math.random() * 10) % possibleOutputs.length]
}


function getHumanChoice() {
    let promptHuman = prompt("rock, paper or scissor? ");
    return promptHuman;
}


function playRound(humanChoice, computerChoice) {

    console.log(`human choice is ${humanChoice}, computer choice is ${computerChoice}`)

    if (
        (humanChoice === possibleOutputs[0] && computerChoice === possibleOutputs[1]) || 
        (humanChoice === possibleOutputs[1] && computerChoice === possibleOutputs[2]) || 
        (humanChoice === possibleOutputs[2] && computerChoice === possibleOutputs[0])) {
            console.log(`You lost!`)
            computerScore++;
        } else if (
        (humanChoice === possibleOutputs[0] && computerChoice === possibleOutputs[2]) || 
        (humanChoice === possibleOutputs[1] && computerChoice === possibleOutputs[0]) || 
        (humanChoice === possibleOutputs[2] && computerChoice === possibleOutputs[1])) {
            console.log("You won!")
            humanScore++;
        } else {
            console.log("Tie...")
    }
    console.log(`human score: ${humanScore}, computer score: ${computerScore}`);

}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (computerScore > humanScore) {
        alert(`Winner is the computer with ${computerScore} points vs your ${humanScore} points!`);
    } else if (computerScore < humanScore) {
        alert(`You are the winner with ${humanScore} points vs ${computerScore} computer's points!`);
    } else {
        alert(`You both have ${humanScore} points. Result is tie!`)
    }
    return
}

playGame();