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

let humanrnd1 = getHumanChoice();
let computerrnd1 = getComputerChoice();

let humanrnd2 = getHumanChoice();
let computerrnd2 = getComputerChoice();

let humanrnd3 = getHumanChoice();
let computerrnd3 = getComputerChoice();

let humanrnd4 = getHumanChoice();
let computerrnd4 = getComputerChoice();

let humanrnd5 = getHumanChoice();
let computerrnd5 = getComputerChoice();

function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == rock && computerChoice == scissors) {
    ++humanScore
    console.log(`Computer picked Scissors, You picked Rock. Rock beats scissors. You win! Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
    else if (humanChoice == scissors && computerChoice == rock) {
      ++computerScore
      console.log(`Computer picked Rock, You picked Scissors. Rock beats Scissors. You lose! Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
      else if (humanChoice == rock && computerChoice == paper) {
        ++computerScore
        console.log(`Computer picked Paper, You picked Rock. Paper beats Rock. You lose! Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
        else if (humanChoice == paper && computerChoice == rock) {
          ++humanScore
          console.log(`Computer picked Rock, You picked Paper. Paper beats Rock. You win! Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
          else if (humanChoice == scissors && computerChoice == paper){
            ++humanScore
            console.log(`Computer picked Paper, You picked Scissors. Scissors beat Paper. You win! Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
            else if (humanChoice == paper && computerChoice == scissors){
              ++computerScore
              console.log(`Computer picked Scissors, You picked Paper. Scissors beat Paper. You lose! Your current score is: ${humanScore} and computer score is: ${computerScore}`)}
              else {console.log("It's a tie")}
}

playRound(humanrnd1, computerrnd1);
playRound(humanrnd2, computerrnd2);
playRound(humanrnd3, computerrnd3);
playRound(humanrnd4, computerrnd4);
playRound(humanrnd5, computerrnd5);

if (humanScore > computerScore) {
  console.log("You won!")
}
else if (!(humanScore > computerScore)){
  console.log("You lost!")
}
else {console.log("The game is a tie.")}
}

playGame()