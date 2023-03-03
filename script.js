let computerChoice 
let playerChoice
let computerScore = 0
let playerScore = 0 
let rockBtn = document.getElementById("rock")
let scissorsBtn = document.getElementById("scissors")
let paperBtn = document.getElementById("paper")
let winner = document.getElementById("declare-winner")
let playerScoreDisplay = document.getElementById("player-score")
let computerScoreDisplay = document.getElementById("computer-score")
let choice = document.getElementById("choices")
let restartBtn = document.getElementById("restart")



function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
    return "rock";
}  else if (computerChoice === 2) {
    return "paper";
} else {
    return "scissors";
};
};

function playRound (playerChoice) {
    computerChoice = getComputerChoice();
    if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore ++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore ++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore ++;
    } else if (playerChoice === "rock" && computerChoice === "paper") { 
        computerScore ++;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore ++;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore ++;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    choice.textContent = `You picked ${playerChoice} and the computer picked ${computerChoice}.`;

    if (computerScore === 5) {
        winner.textContent = "The computer beat you! Do you want to restart the game?";
        restartBtn.style.display ="inline"
      } else if (playerScore === 5) {
        winner.textContent = "You beat the computer! Do you want to restart the game?";
        restartBtn.style.display ="inline"
      };
}      

 function restartGame () {
    playerScore = 0;
    computerScore = 0;
    choice.textContent = "";
    winner.textContent = "";
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    restartBtn.style.display = "none";

 };

 rockBtn.addEventListener("click", function() {
    playRound("rock");
  });

  paperBtn.addEventListener("click", function() {
    playRound("paper");
  });

  scissorsBtn.addEventListener("click", function() {
    playRound("scissors");
  });

  restartBtn.addEventListener("click", function() {
    restartGame();
  })

