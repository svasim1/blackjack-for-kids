import { hit } from "./game.js";
import { houseHandTotal } from "./houseManager.js";
import { getResult } from "./getResult.js";

let playerHand = [];
let playerStand = false;
let playerHandTotal = 0;

export function setPlayerStand(value) {
  playerStand = value;
}

export function getPlayerStand() {
  return playerStand;
}

// Add a card to the player's hand
export function addPlayerCard(card) {
  playerHand.push(card);
  updateHand();
}

function getPlayerHandTotal() {
  playerHandTotal = playerHand.reduce((total, card) => total + card.value, 0);
  return playerHandTotal;
}

// Update the player's hand
function updateHand() {
  let playerHandTotal = getPlayerHandTotal();
  updateUI(playerHandTotal);

  return playerHandTotal;
}

// Update the UI
function updateUI(playerHandTotal) {
  let handTotalElement = document.getElementById("hand-total");
  let hitButton = document.getElementById("hitButton");
  let buttons = document.getElementsByClassName("button");

  handTotalElement.innerHTML = `Hand total: ${playerHandTotal}`;

  // Check if player has won or lost
  if (playerHandTotal === 21) {
    for (let button of buttons) {
      button.disabled = true;
    }
    setPlayerStand(true);
    hit();
  } else if (playerHandTotal > 21) {
    for (let button of buttons) {
      button.disabled = true;
    }
    let result = getResult(houseHandTotal, playerHandTotal);
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").classList.add("show");
  }

  // Update the cards shown on screen
  document.getElementById("hand-cards").innerHTML = "";
  playerHand.forEach((card) => {
    let img = document.createElement("img");
    img.src = `cards/${card.cardImage}`;
    img.style.width = "50px";
    img.style.height = "auto";
    document.getElementById("hand-cards").appendChild(img);
  });
}

// Export the player's hand total
export { playerHandTotal };
