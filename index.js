let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${`${firstCard} ${secondCard}`}`

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

function newCard() {
    console.log("Drawing a new card from the deck!")
}