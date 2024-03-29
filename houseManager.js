// IMport neccessary functions and variables
import { hit } from "./game.js";
import { getResult, displayResult } from "./getResult.js";
import { getPlayerStand, playerHandTotal } from "./playerManager.js";

// Declare DOM elements
const houseCardsElement = document.getElementById("dealerHandDiv");
const houseHandTotalElement = document.getElementById("dealerSum");

// Initialize variables
let houseHand = [];
let houseHandTotal = 0;

export function clearHouse() {
  houseHand = [];
  houseHandTotal = 0;
}

// Function to add a card to the house's hand
export function addHouseCard(card) {
  houseHand.push(card);
  updateHand();
}

// Function to update the house's hand total
function setHandTotal() {
  houseHandTotal = houseHand.reduce((total, card) => total + card.value, 0);

  // Check for aces
  if (houseHandTotal > 21) {
    if (houseHand.at(-1).value === 11) {
      houseHandTotal = houseHandTotal - 10;
    }
  }
}

// Function to decide the house's action
function decideHouseAction() {
  // Add a card if the house's hand total is less than 17 and the player has stood
  if (houseHandTotal < 17 && getPlayerStand()) {
    hit(false, true);
  }
  // Display the result if the house's hand total is greater than or equal to 17
  else if (houseHandTotal >= 17) {
    displayResult(getResult(houseHandTotal, playerHandTotal));
  }
}

// Function to update the house's hand
function updateUI() {
  houseCardsElement.textContent = "";
  houseHand.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = `${card.cardImage}`;
    img.style.width = "115px";
    img.style.height = "175px";
    const marginLeft = index * 5;
    img.style.marginLeft = `${marginLeft}%`;
    houseCardsElement.appendChild(img);
  });
}

// Function to update the house's hand
function updateHand() {
  setHandTotal();
  decideHouseAction();
  updateUI();
}

// Export houseHantTotal for use in playerManager.js
export { houseHandTotal };
