// Create variables for the game state
let playerScore = 0
let computerScore = 0

// Create variables to store references to the necessary DOM nodes
const playerDice = document.getElementById("playerDice")
const computerDice = document.getElementById("computerDice")
const playerScoreboard = document.getElementById("playerScoreboard")
const computerScoreboard = document.getElementById("computerScoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

function playerRoll() {
    const randomNumber = rollDice()
    playerScore += randomNumber
    playerDice.textContent = randomNumber
}

function computerRoll() {
    const randomNumber = rollDice()
    computerScore += randomNumber
    computerDice.textContent = randomNumber
}

rollBtn.addEventListener("click", function () {
    setTimeout(renderResults, 500);
});

function renderResults() {
    playerRoll()
    computerRoll()

    if (playerScore >= 20) {
        message.textContent = "You Won 👍"
        playerScoreboard.textContent = playerScore
        computerDice.textContent = "-"
        playerScoreboard.classList.add("winner")
        showResetButton()
    } else if (computerScore >= 20) {
        message.textContent = "Computer Won ☠️"
        computerScoreboard.textContent = computerScore
        playerScoreboard.textContent = playerScore
        computerScoreboard.classList.add("winner")
        showResetButton()
    } else {
        playerScoreboard.textContent = playerScore
        computerScoreboard.textContent = computerScore
    }
}

resetBtn.addEventListener("click", function () {
    reset()
})

function reset() {
    playerScore = 0
    computerScore = 0
    playerScoreboard.textContent = 0
    computerScoreboard.textContent = 0
    message.textContent = "👇Reach 20 points!"
    playerDice.textContent = "-"
    computerDice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    playerScoreboard.classList.remove("winner")
    computerScoreboard.classList.remove("winner")
}
