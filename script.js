let options = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let computerScore = 0
let playingRounds = 10

let computerSelection = computerPlay()
    let playerSelection = computerPlay()

function computerPlay(){
    randomOption = options[Math.floor(Math.random()*options.length)]
    return randomOption;
}


function singleRound(playerSelection, computerSelection){
    computerSelection = computerPlay()
    playerSelection = computerPlay()
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection==computerSelection){
        console.log("TIE")
    }
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
      ) {
          console.log("Player wins!")
          playerScore++
          console.log("Player Score:", playerScore)
      }
      if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
      ) {
          console.log("Computer wins!")
          computerScore++
          console.log("Computer Score:", computerScore)
      }
}

//singleRound(playerSelection, computerSelection)))

function game(playerSelection,computerSelection){
    for (let i = 1;i <= playingRounds; i++){
        singleRound(playerSelection, computerSelection);
    }
    matchResult(playerScore, computerScore)
}

game(playerSelection, computerSelection)

function matchResult(playerScore, computerScore){
    if (playerScore === computerScore){
        console.log("Game is a tie.")
    }
    if (playerScore > computerScore){
        console.log("Player won. Player has a score of", playerScore, " points while the computer has a score of", computerScore, " points.")
    }
    if (playerScore < computerScore){
        console.log("Computer won. Computer has a score of", computerScore, " points while the player has a score of", playerScore, " points.")
    }
}