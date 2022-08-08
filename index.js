let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


function startGame() {
    renderGame();
}


function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${`${cards[0]} ${cards[1]}`}`

    if (sum <= 20) {
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
    let card = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
    sum += card;
    cards.push(card)
    renderGame();
    cardsEl.textContent = `Cards: ${cards}`

}