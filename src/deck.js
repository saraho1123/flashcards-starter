class Deck {
  constructor(deckCards) {
    this.decks = deckCards;
  }

  countCards() {
    return this.decks.length;
  }
}

module.exports = Deck;