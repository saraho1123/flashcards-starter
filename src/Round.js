const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.allCards[this.turns];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    let turn = new Turn(guess, currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id);
    }
    this.turns += 1;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const amountIncorrect = this.incorrectGuesses.length;
    const deckLength = this.deck.allCards.length
    const amountCorrect = deckLength - amountIncorrect;
    return Math.floor((amountCorrect / deckLength) * 100);
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    console.log(`**Round over!** You answered ${percentCorrect}% of the questions correctly!`);
    return `**Round over!** You answered ${percentCorrect}% of the questions correctly!`;
  }
};

module.exports = Round;
