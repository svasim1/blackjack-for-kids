// Import neccessary functions and variables
import { houseHandTotal } from "./houseManager.js";
import { displayResult, getResult } from "./getResult.js";
import { hit } from "./game.js";

// Declare DOM elements
const handTotalElement = document.getElementById("handSum");
const handCardsElement = document.getElementById("ownHandDiv");
const buttons = document.getElementsByClassName("button");

// Initialize variables
let playerHand = [];
let playerStand = false;
let playerHandTotal = 0;
let aces = 0;

// Function to update playerStand
export function setPlayerStand(value) {
  playerStand = value;
}

// Function to get playerStand
export function getPlayerStand() {
  return playerStand;
}

// Function to add a card to the player's hand
export function addPlayerCard(card) {
  playerHand.push(card);
  updateHand();
}

// Function to update the player's hand total
function setPlayerHandTotal() {
  playerHandTotal = playerHand.reduce((total, card) => total + card.value, 0);

  // Check for aces
  if (playerHandTotal > 21) {
    if (playerHand.at(-1).value === 11) {
      aces++;
      alert("You have an ace! It's value is now 1.");
    }
  }

  playerHandTotal = playerHandTotal - 10 * aces;
}

// Function to disable buttons
function disableButtons() {
  for (let button of buttons) {
    button.disabled = true;
  }
}

// Function to check if the player has won or busted
function checkWinOrBust() {
  // Check for player blackjack
  if (playerHandTotal === 21) {
    disableButtons();
    setPlayerStand(true);
    // Deal a card to the house
    hit(false, true);
  }
  // Check for player bust
  else if (playerHandTotal > 21) {
    disableButtons();
    displayResult(getResult(houseHandTotal, playerHandTotal));
  }
}

// Function to update the player's hand
function updateHand() {
  setPlayerHandTotal();
  updateUI();
}

// Function to update the UI
function updateUI() {
  // Update the hand total
  handTotalElement.textContent = `Hand total: ${playerHandTotal}`;
  // Check for win or bust
  checkWinOrBust();

  // Update the hand cards
  handCardsElement.textContent = "";
  playerHand.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = `${card.cardImage}`;
    img.style.width = "115px";
    img.style.height = "175px";
    const marginLeft = index * 2.5;
    img.style.marginLeft = `${marginLeft}%`;
    handCardsElement.appendChild(img);
  });
}

// Export playerHandTotal for use in houseManager.js
export { playerHandTotal };
