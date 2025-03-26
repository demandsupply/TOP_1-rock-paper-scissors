// write a function that randomly returns "rock", "paper", "scissor"
// prompt user for "rock", "paper", "scissor"
// execute the random function
// compare the results and prnit if the user won or lost

const possibleOutputs = ["rock", "paper", "scissor"]

function getComputerChoice() {
    return possibleOutputs[Math.floor(Math.random() * 10) % possibleOutputs.length]
}

console.log(getComputerChoice());