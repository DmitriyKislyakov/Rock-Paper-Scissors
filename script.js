let arr = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0


function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getHumanChoice() {
  let choice = prompt('Rock or Paper or Scissors?')
  if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'r')
    return arr[0]
  else if (choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'p')
    return arr[1]
  else if (choice.toLowerCase() == 'scissors' || choice.toLowerCase() == 's')
    return arr[2]
  else{
    alert('Not rock-paper-scissors! Try again')
    return getHumanChoice()    
  }
}

function playRound(humanChoice, ComputerChoice) {
  if (humanChoice == ComputerChoice)
    return console.log(`${humanChoice}, ${ComputerChoice} - DRAW`)
  if (humanChoice == 'rock') {
    ComputerChoice == 'paper'
      ? (console.log('You lose! Paper beats Rock'), computerScore++)
      : (console.log('You win! Rock beats Scissors'), humanScore++) 
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

}

function playGame(){
  for (let i=0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`${humanScore} : ${computerScore}`)
  }
  if (humanScore == computerScore)
    alert('DROW!')
  if (humanScore > computerScore)
    alert('You WIN!')
  if (humanScore < computerScore)
    alert('You LOSE!')
}


//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

playGame()
