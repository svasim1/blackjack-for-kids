import { Cards } from "./cards.js";
import {
  addPlayerCard,
  getPlayerStand,
  setPlayerStand,
} from "./playerManager.js";
import { addHouseCard } from "./houseManager.js";

// Dictionary of card names
let values = {
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

let deck = new Cards();

// Create a full deck of 52 cards
["hearts", "diamonds", "clubs", "spades"].forEach((suit) => {
  for (let value = 1; value <= 13; value++) {
    let card = deck.createCard(value, suit);
    deck.cards.push(card);
  }
});

// Hit button
document.getElementById("hitButton").addEventListener("click", () => {
  hit();
});

// Stand button
document.getElementById("standButton").addEventListener("click", () => {
  stand();
});

function stand() {
  document.getElementById("hitButton").disabled = true;
  document.getElementById("standButton").disabled = true;

  setPlayerStand(true);
  hit();
}

export function hit() {
  let dealtCard = deck.dealCard();

  let id = values[dealtCard.id];
  let value = deck.getCardValue(dealtCard);
  let suit = deck.getCardSuit(dealtCard);
  let cardImage = `${id}_of_${suit}`;

  if (!getPlayerStand()) {
    addPlayerCard({ id, value, suit, cardImage });
  } else {
    addHouseCard({ id, value, suit, cardImage });
  }
}

window.onload = function () {
  deck.shuffle();
  hit();
};
