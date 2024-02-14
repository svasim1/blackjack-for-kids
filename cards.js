// This file contains the class Cards which is used to create a deck of cards, shuffle the deck, and deal cards.
//The class also contains methods to get the value and suit of a card.
//The class is used in game.js to create a deck of cards, shuffle the deck, and deal cards to the player and house.

/**
 * Represents a deck of cards.
 */
export class Cards {
  constructor() {
    this.cards = [];
  }

  /**
   * Creates a card with a value and a suit.
   * @param {number} value - The value of the card.
   * @param {string} suit - The suit of the card.
   * @returns {Object} The created card object.
   */
  createCard(value, suit) {
    const card = {
      id: value,
      value,
      suit,
    };
    return card;
  }

  /**
   * Gets the value of a card. (Configured for blackjack. May be moved to separete file in the future.)
   * @param {Object} card - The card object.
   * @returns {number} The value of the card.
   */
  getCardValue(card) {
    switch (card.value) {
      case 1:
        return 11;
      case 11:
      case 12:
      case 13:
        return 10;
      default:
        return card.value;
    }
  }

  /**
   * Gets the suit of a card.
   * @param {Object} card - The card object.
   * @returns {string} The suit of the card.
   */
  getCardSuit(card) {
    return card.suit;
  }

  /**
   * Shuffles the deck of cards using the Fisher-Yales algorithm. (May be moved to separete file in the future.)
   */
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get a random index
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap elements
    }
  }

  /**
   * Deals a card by removing the last card from the deck.
   * @returns {Object} The dealt card object.
   */
  dealCard() {
    return this.cards.pop();
  }
}
