let arr = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getHumanChoice(choice) {
  /*
  let choice = prompt('Rock or Paper or Scissors?')
  if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'r')
    return arr[0]
  else if (choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'p')
    return arr[1]
  else if (choice.toLowerCase() == 'scissors' || choice.toLowerCase() == 's')
    return arr[2]
  else {
    alert('Not rock-paper-scissors! Try again')
    return getHumanChoice()
  }
  */
  return choice
}

function playRound(humanChoice, ComputerChoice) {
  let you = ''
  let explain = ''
  let roundResult = [humanScore, computerScore, you, explain, humanChoice, ComputerChoice]
  if (humanChoice == ComputerChoice) {
    you = 'DRAW'
    explain = `${humanChoice} x ${ComputerChoice}`
  }

  if (humanChoice == 'rock') {
    ComputerChoice == 'paper'
      ? (you = 'You lose!', explain = 'Paper beats Rock', computerScore++)
      : (you = 'You win!', explain = 'Rock beats Scissors', humanScore++)
  }
  if (humanChoice == 'paper') {
    ComputerChoice == 'scissors'
      ? (console.log('You lose! Scissors beats Paper'), computerScore++)
      : (console.log('You win! Paper beats Rock'), humanScore++)
  }
  if (humanChoice == 'scissors') {
    ComputerChoice == 'rock'
      ? (console.log('You lose! Rock beats Scissors'), computerScore++)
      : (console.log('You win! Scissors beats Paper'), humanScore++)
  }
  return console.log(roundResult)
}

function playGame() {
  /*
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    console.log(`${humanScore} : ${computerScore}`)
  }
  if (humanScore == computerScore) console.log('DROW!')
  if (humanScore > computerScore) console.log('You WIN!')
  if (humanScore < computerScore) console.log('You LOSE!')
  */
  humanScore = computerScore = 0
  
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playGame()

const rock = document.querySelector("#rock")
rock.addEventListener("click", () => {playRound(getHumanChoice("rock"), getComputerChoice())})

const paper = document.querySelector("#paper")
paper.addEventListener("click", () => {playRound(getHumanChoice("paper"), getComputerChoice())})

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {playRound(getHumanChoice("scissors"), getComputerChoice())})

const play = document.querySelector("#play")
scissors.addEventListener("click", () => {playGame})

const container = document.querySelector(".container")

const scoreContent = document.createElement("h1")
scoreContent.classList.add("scoreContent")
scoreContent.textContent = `${humanScore} : ${computerScore}`
container.appendChild(scoreContent)
