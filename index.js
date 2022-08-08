let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
    sumEl.textContent = `Sum: ${sum}`;
    
    if (sum <= 15) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        hasBlackJack = true;
        message = "Wahoo! You got a blackjack!";
    }
    else {
        isAlive = false;
        message = "You're out of the game!";
    }
    
    messageEl.textContent = message;
    
}