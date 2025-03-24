let firstCard, secondCard, sum = 0;
let cards = [firstCard, secondCard]
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let newcardEl = document.querySelector("#newcard-el");

function getRandomCard() {
    let rndcrd = Math.floor(Math.random() * 13 + 1);
    return rndcrd >= 10 ? 10 : rndcrd == 1 ? 11 : rndcrd;
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        isAlive = false;
        message = "You're out of the game!";
    }
    messageEl.textContent = message;
}

function newCard() {
    // console.log(cards)
    if (isAlive && !hasBlackJack) {
        // console.log(cards)
        let card = getRandomCard();
        sum += card;
        // console.log(cards)
        cards.push(card);
        // console.log(cards)
        renderGame();
    }
}

function startGame() {
    cards[0] = getRandomCard(), cards[1] = getRandomCard();
    sum = cards[0] + cards[1];
    if (!isAlive) {
        // console.log(cards)
        for(let i=cards.length;i>2;i--){
            cards.pop();
        }
        // console.log(cards)
        isAlive = true;
        renderGame();
    }
}

let player = {
    name: "Shaurya",
    chips: 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;