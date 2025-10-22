let deck = [];
let playerHand = [];
let dealerHand = [];

const playerCards = document.getElementById("player-cards");
const dealerCards = document.getElementById("dealer-cards");
const playerScoreEl = document.getElementById("player-score");
const dealerScoreEl = document.getElementById("dealer-score");
const messageEl = document.getElementById("message");

const btnStart = document.getElementById("btn-start");
const btnHit = document.getElementById("btn-hit");
const btnStand = document.getElementById("btn-stand");

btnStart.addEventListener("click", startGame);
btnHit.addEventListener("click", hit);
btnStand.addEventListener("click", stand);

function createDeck() {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }
}

function getCardValue(card) {
  if (["J", "Q", "K"].includes(card.value)) return 10;
  if (card.value === "A") return 11;
  return parseInt(card.value);
}

function calculateScore(hand) {
  let score = hand.reduce((acc, card) => acc + getCardValue(card), 0);
  let aceCount = hand.filter(card => card.value === "A").length;
  while (score > 21 && aceCount > 0) {
    score -= 10; // turn one Ace from 11 → 1
    aceCount--;
  }
  return score;
}

function drawCard() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck.splice(randomIndex, 1)[0];
}

function displayHands() {
  playerCards.innerHTML = "";
  dealerCards.innerHTML = "";
  playerHand.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.textContent = card.value + card.suit;
    playerCards.appendChild(cardEl);
  });
  dealerHand.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.textContent = card.value + card.suit;
    dealerCards.appendChild(cardEl);
  });

  playerScoreEl.textContent = "Score: " + calculateScore(playerHand);
  dealerScoreEl.textContent = "Score: " + calculateScore(dealerHand);
}

function startGame() {
  createDeck();
  playerHand = [drawCard(), drawCard()];
  dealerHand = [drawCard(), drawCard()];
  messageEl.textContent = "";
  btnHit.disabled = false;
  btnStand.disabled = false;
  btnStart.disabled = true;
  displayHands();

  if (calculateScore(playerHand) === 21) {
    messageEl.textContent = "Blackjack! You win 🎉";
    endGame();
  }
}

function hit() {
  playerHand.push(drawCard());
  displayHands();

  if (calculateScore(playerHand) > 21) {
    messageEl.textContent = "You busted! 💥 Dealer wins.";
    endGame();
  }
}

function stand() {
  while (calculateScore(dealerHand) < 17) {
    dealerHand.push(drawCard());
  }

  displayHands();

  const playerScore = calculateScore(playerHand);
  const dealerScore = calculateScore(dealerHand);

  if (dealerScore > 21 || playerScore > dealerScore) {
    messageEl.textContent = "You win 🎉";
  } else if (playerScore < dealerScore) {
    messageEl.textContent = "Dealer wins 😢";
  } else {
    messageEl.textContent = "It's a tie 🤝";
  }

  endGame();
}

function endGame() {
  btnHit.disabled = true;
  btnStand.disabled = true;
  btnStart.disabled = false;
}
