let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";


function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    }
    else if (sum === 21) {
        hasBlackJack = true;
        message = "Wahoo! You got a blackjack! 🥳";
    }
    else {
        isAlive = false;
        message = "You're out of the game! 😭";
    }
    
    // Cash out
    console.log(message)
}


