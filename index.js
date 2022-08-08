let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;


let sum = firstCard + secondCard;

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