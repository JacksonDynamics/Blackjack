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


<<<<<<< HEAD
=======
console.log(firstCard,secondCard)
console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
}
else if (sum === 21) {
    console.log("Wahoo! You got a blackjack! 🥳")
}
else {
    console.log("You're out of the game! 😭")
}
>>>>>>> bf6affb2a24dd35f86511c730a3a63c4c01b14a5
