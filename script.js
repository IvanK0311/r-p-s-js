let computerChoice 
let playerChoice
let computerScore = 0
let playerScore = 0 

function getPlayerChoice () {
    return prompt("rock, paper or scissors?")
}

function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * 3) + 1
    if (computerChoice === 1) {
    return "rock";
}  else if (computerChoice === 2) {
    return "paper";
} else {
    return "scissors";
}
}

function playRound (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert(`Tie! Player score : ${playerScore}. Computer score : ${computerScore}`)
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore ++
        alert(`You win! Player score : ${playerScore}. Computer score : ${computerScore}`)
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore ++
        alert(`You win! Player score : ${playerScore}. Computer score : ${computerScore}`)
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore ++
        alert(`You win! Player score : ${playerScore}. Computer score : ${computerScore}`)
    } else {
        computerScore ++ 
        alert(`You loose! Player score : ${playerScore}. Computer score : ${computerScore}`)
    }
 }

 function restartGame () {
    alert(`The game restarted, good luck!`)
    playerScore = 0
    computerScore = 0
    playGame()
 }

function playGame() {
    while (playerScore < 5 && computerScore < 5) {
    playRound(getPlayerChoice(), getComputerChoice())
    }
    if (playerScore === 5) {
        alert(`Congratulations! You beat the computer!`)
        let restart = confirm(`Do you want to restart the game?`)
        if (restart) {
          restartGame()  
        }
    } else {
        alert(`The computer beat you! Better luck next time!`)
        let restart = confirm(`Do you want to restart the game?`)
        if (restart) {
          restartGame()  
        }
        
    }
}
 
alert(`The first one to reach 5 points wins! Best of luck!`)

playGame()


