import { Cards } from "./cards.js";

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

deck.shuffle();

let dealtCard = deck.dealCard();
let suit = deck.getCardSuit(dealtCard);
let value = deck.getCardValue(dealtCard);
let id = values[dealtCard.id];

let cardImage = `${id}_of_${suit}`;

document.getElementById(
  "hand-total"
).innerHTML = `Dealt card: ${value} of ${suit} with id: ${id}`;

document.getElementById(
  "hand-cards"
).innerHTML = `<img src="cards/${cardImage}.png" style="width: 50px; height: auto"></img>`;
