let player = {
    name: "Player",
    chips: 200
}

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.querySelector("#player-el")
playerEl.textContent = `${player.name}:  $${player.chips}`

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame(firstCard, secondCard);
}

function renderGame() {
    cardsEl.textContent = `Cards: `

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `;
    }
    
    sumEl.textContent = `Sum: ${sum}`;
    
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
    if(isAlive && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
}