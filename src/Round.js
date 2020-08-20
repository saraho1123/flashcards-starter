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
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id);
    }
    this.turns += 1;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const amountIncorrect = this.incorrectGuesses.length;
    const amountCorrect = this.deck.allCards.length - amountIncorrect;
    return Math.floor((amountCorrect / this.deck.allCards.length) * 100);
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    return `**Round over!** You answered ${percentCorrect}% of the questions correctly!`;
  }
};

module.exports = Round;
