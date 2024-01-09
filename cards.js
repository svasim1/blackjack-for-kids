export class Cards {
  constructor() {
    this.cards = [];
  }

  createCard(value, suit) {
    const card = {
      id: value,
      value,
      suit,
    };
    return card;
  }

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

  getCardSuit(card) {
    return card.suit;
  }

  shuffle() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  dealCard() {
    return this.cards.pop();
  }
}
