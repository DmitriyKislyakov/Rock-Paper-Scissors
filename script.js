let arr = ['rock', 'papper', 'scissors']
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getHumanChoice() {
  let choice = prompt('Rock or Papper or Scissors?')
  return choice
}

function playRound(humanChoice, ComputerChoice) {}

console.log(getComputerChoice())
console.log(getHumanChoice())
