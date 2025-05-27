let humanScore = 0;
let computerScore = 0;


let body = document.querySelector("body")

let playAgain = document.createElement("button")
playAgain.textContent = "Play Again"

let buttons = document.querySelectorAll(".buttons")

let cScore = document.querySelector("#cScore")

let resultContainer = document.querySelector("#resultContainer")

let botChoice = document.createElement("div")

let result = document.querySelector("#result")

let personChoice = document.createElement("div")

let hScore = document.querySelector("#hScore")

let selection = document.querySelector("#selection")

let reset = document.querySelector("#reset")


function getComputerChoice() {
  let random = Math.floor(Math.random() * (2 - 0 + 1) + 0)
  if (random == 0) {
    return "";
  }
  else if (random == 1) {
    return "";
  }
  else if (random == 2) {
    return "✂️";
  }
}

function playRound(humanChoice, computerChoice) {
  
  resultContainer.insertBefore(botChoice, result)
  
  resultContainer.appendChild(personChoice)
  
  
  if (humanChoice == "" && computerChoice == "✂️") {
    ++humanScore
    botChoice.textContent = `${computerChoice}`
    personChoice.textContent = `${humanChoice}`
    result.textContent = "You win!"
  }
  else if (humanChoice == "" && computerChoice == "") {
    ++humanScore
    botChoice.textContent = `${computerChoice}`
    personChoice.textContent = `${humanChoice}`
    result.textContent = `You win!`
  }
  else if (humanChoice == "✂️" && computerChoice == "") {
    ++humanScore
    botChoice.textContent = `${computerChoice}`
    personChoice.textContent = `${humanChoice}`
    result.textContent = "You win!"
  }
  else if (humanChoice == "✂️" && computerChoice == "") {
    ++computerScore
    botChoice.textContent = `${computerChoice}`
    personChoice.textContent = `${humanChoice}`
    result.textContent = "You lose!"
  }
  else if (humanChoice == "" && computerChoice == "") {
    ++computerScore
    botChoice.textContent = `${computerChoice}`
    personChoice.textContent = `${humanChoice}`
    result.textContent = "You lose!"
  }
  else if (humanChoice == "" && computerChoice == "✂️") {
    ++computerScore
    botChoice.textContent = `${computerChoice}`
    personChoice.textContent = `${humanChoice}`
    result.textContent = "You lose!"
  }
  else {
    botChoice.textContent = `${computerChoice}`
    personChoice.textContent = `${humanChoice}`
    result.textContent = "It's a tie"
  }
  
  
  cScore.textContent = `Computer's score: ${computerScore}`
  hScore.textContent = `Your score: 
  ${humanScore}`
  
  
  if (humanScore == 5) {
    
    result.textContent = "YOU WON THE GAME!"
    
    buttons.forEach((button) => button.remove())
    
    selection.appendChild(playAgain)
  }
  
  else if (computerScore == 5) {
    
    result.textContent = "YOU LOST THE GAME!"
    
    buttons.forEach((button) => button.remove())
    
    reset.remove()
    
    selection.appendChild(playAgain)
    
  }
}

function startOver() {
  
  botChoice.remove()
  personChoice.remove()
  
  humanScore = 0
  computerScore = 0
  
  cScore.textContent = `Computer's score: ${computerScore}`
  
  hScore.textContent = `Your score: 
  ${humanScore}`
  
  result.textContent = "Choose your pick"
}


result.textContent = "Choose your pick"

cScore.textContent = `Computer's score: ${computerScore}`

hScore.textContent = `Your score: 
  ${humanScore}`


selection.addEventListener("click", (e) => {
  let humanChoice = e.target.textContent
  
  let computerChoice = getComputerChoice()
  
  if (e.target.tagName !== "BUTTON" || e.target == playAgain) {
    return
  }
  
  playRound(humanChoice, computerChoice)
})

reset.addEventListener("click", () => {
  startOver()
})

playAgain.addEventListener("click", () => {
  startOver()
  
  playAgain.remove()
  
  buttons.forEach((button) =>
    selection.appendChild(button)
  )
  
  body.appendChild(reset)
})