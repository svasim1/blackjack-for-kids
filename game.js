// Import neccessary functions and variables
import { Cards } from "./cards.js";
import {
  addPlayerCard,
  playerHandTotal,
  setPlayerStand,
  clearPlayer,
} from "./playerManager.js";
import { addHouseCard, clearHouse } from "./houseManager.js";

let deck;
let gameActive = true;

// Declare DOM elements
const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const restartButton = document.getElementById("restartButton");

// Dictionary of card names
const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = {
  1: "ace",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "jack",
  12: "queen",
  13: "king",
};

// Function to initialize the deck - returns a shuffled deck
function initializeDeck() {
  let deck = new Cards();

  // Create a full deck of 52 cards
  suits.forEach((suit) => {
    for (let value = 1; value <= 13; value++) {
      let card = deck.createCard(value, suit);
      deck.cards.push(card);
    }
  });

  // Shuffle the deck
  deck.shuffle();
  return deck;
}

function startGame() {
  gameActive = true;
  // Initialize the deck
  deck = initializeDeck();
  // Deal two cards to the player and one card to the house
  hit(true, true);
  hit(true, true);
  hit(false, true);
}

function restartGame() {
  gameActive = true;
  // Clear the player's and house's hands
  clearPlayer();
  clearHouse();
  // Start the game
  startGame();
}

// Event listeners for the hit and stand buttons
hitButton.addEventListener("click", () => hit(true, true));
standButton.addEventListener("click", () => stand());
restartButton.addEventListener("click", () => restartGame());

// Function to stand - disable buttons, set playerStand to true, and deal a card to the house
function stand() {
  hitButton.disabled = true;
  standButton.disabled = true;
  setPlayerStand(true);
  // Deal a card to the house
  hit(false, true);
}

// Function to generate card details
function generateCardDetails(dealtCard, isShown) {
  return {
    id: values[dealtCard.id],
    value: deck.getCardValue(dealtCard),
    suit: deck.getCardSuit(dealtCard),
    cardImage: isShown
      ? `../Images/${values[dealtCard.id]}_of_${dealtCard.suit}.png`
      : "card_back.png",
  };
}

// Function to hit a card - deals a card and adds it to the player's or house's hand
export function hit(isPlayer, isShown) {
  let dealtCard = deck.dealCard();

  // Error handling
  if (!dealtCard) {
    console.error("No card was dealt");
    return;
  }

  let cardDetails = generateCardDetails(dealtCard, isShown);

  // Add the card to the player's or house's hand
  if (isPlayer) {
    addPlayerCard(cardDetails);
  } else {
    addHouseCard(cardDetails);
  }
}

// On page load, deal two cards to the player and one card to the house
window.onload = function () {
  startGame();
};
