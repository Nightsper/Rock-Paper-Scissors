let rock = "rock"
let paper = "paper"
let scissors = "scissors"

function getComputerChoice(){
  let random = Math.floor(Math.random() * (2 - 0 + 1) + 0)
  if (random == 0){
    return rock;
  }
  else if (random == 1) {
    return paper;
  }
  else if (random == 2) {
    return scissors;
  }
}

function getHumanChoice(){
  let answer = prompt("Pick rock, paper or scissors.")
  return answer
}

let humanScore = 0
let computerScore = 0