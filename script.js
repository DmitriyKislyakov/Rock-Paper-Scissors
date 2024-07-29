let arr = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

const score = document.querySelector('.score')
score.innerHTML = `${humanScore} : ${computerScore}`

const result = document.querySelector('.result')
result.innerHTML = 'New Game'

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
  playRound(getHumanChoice('rock'), getComputerChoice())
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
  playRound(getHumanChoice('paper'), getComputerChoice())
})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
  playRound(getHumanChoice('scissors'), getComputerChoice())
})

const play = document.querySelector('#play')
play.addEventListener('click', () => playGame())

function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getHumanChoice(choice) {
  return choice
}
/*
function getHumanChoice(choice) {
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

  return choice
}
*/
function winnerCheck() {
  if (humanScore == 5) {
    return 'You WIN Game!'
  }
  if (computerScore == 5) {
    return 'You LOSE Game'
  }
}

function playRound(humanChoice, ComputerChoice) {
  if (humanChoice == ComputerChoice) {
    result.innerHTML = 'Draw!'
    score.innerHTML = `${humanScore} : ${computerScore}`
  }
  if (humanChoice == 'rock') {
    ComputerChoice == 'paper'
      ? ((result.innerHTML = 'You lose! Paper beats Rock'),
        computerScore++,
        (score.innerHTML = `${humanScore} : ${computerScore}`))
      : ((result.innerHTML = 'You win! Rock beats Scissors'),
        humanScore++,
        (score.innerHTML = `${humanScore} : ${computerScore}`))
  }
  if (humanChoice == 'paper') {
    ComputerChoice == 'scissors'
      ? ((result.innerHTML = 'You lose! Scissors beats Paper'),
        computerScore++,
        (score.innerHTML = `${humanScore} : ${computerScore}`))
      : ((result.innerHTML = 'You win! Paper beats Rock'),
        humanScore++,
        (score.innerHTML = `${humanScore} : ${computerScore}`))
  }
  if (humanChoice == 'scissors') {
    ComputerChoice == 'rock'
      ? ((result.innerHTML = 'You lose! Rock beats Scissors'),
        computerScore++,
        (score.innerHTML = `${humanScore} : ${computerScore}`))
      : ((result.innerHTML = 'You win! Scissors beats Paper'),
        humanScore++,
        (score.innerHTML = `${humanScore} : ${computerScore}`))
  }
  if (humanScore == 5 || computerScore == 5) {
    alert(winnerCheck())
    setTimeout(playGame, 1000)
  }
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
  computerScore = humanScore = 0
  score.innerHTML = `${humanScore} : ${computerScore}`
  result.innerHTML = 'New Game'
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playGame()
