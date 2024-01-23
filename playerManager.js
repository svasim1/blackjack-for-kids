import { hit } from "./game.js";

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

// Update the player's hand
function updateHand() {
  let playerHandTotal = playerHand.reduce(
    (total, card) => total + card.value,
    0
  );
  updateUI(playerHandTotal);
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
    handTotalElement.innerHTML += " - Blackjack!";

    setPlayerStand(true);
    hit();
  } else if (playerHandTotal > 21) {
    for (let button of buttons) {
      button.disabled = true;
    }
    handTotalElement.innerHTML += " - Busted!";

    setPlayerStand(true);
    hit();
  }

  // Update the cards shown on screen
  document.getElementById("hand-cards").innerHTML = "";
  playerHand.forEach((card) => {
    let img = document.createElement("img");
    img.src = `cards/${card.cardImage}.png`;
    img.style.width = "50px";
    img.style.height = "auto";
    document.getElementById("hand-cards").appendChild(img);
  });
}

// Export the player's hand total
export { playerHandTotal };
