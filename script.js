let rock = "rock";
let paper = "paper";
let scissors = "scissors";

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
  let answer = prompt("Pick one: Rock, Paper or Scissors.")
  return answer.toLowerCase();
}

let userChoice = getHumanChoice();
let computerChoice = getComputerChoice();


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == rock && computerChoice == scissors) {
    ++humanScore
    console.log(`Computer picked Scissors, You picked Rock. You win! Rock beats scissors. Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
    else if (humanChoice == scissors && computerChoice == rock) {
      ++computerScore
      console.log(`Computer picked Rock, You picked Scissors. You lose! Rock beats Scissors. Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
      else if (humanChoice == rock && computerChoice == paper) {
        ++computerScore
        console.log(`Computer picked Paper, You picked Rock. You lose! Paper beats Rock.Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
        else if (humanChoice == paper && computerChoice == rock) {
          ++humanScore
          console.log(`Computer picked Rock, You picked Paper. You win! Paper beats Rock.Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
          else if (humanChoice == scissors && computerChoice == paper){
            ++humanScore
            console.log(`Computer picked Paper, You picked Scissors. You win! Scissors beat Paper. Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
            else if (humanChoice == paper && computerChoice == scissors){
              ++computerScore
              console.log(`Computer picked Scissors, You picked Paper. You lose! Scissors beat Paper. Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
              else {console.log("It's a tie")}
}

playRound(userChoice, computerChoice)