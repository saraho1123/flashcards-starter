const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.currentCard = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard.decks[0];
  }

  takeTurn(guess) {
    const currentCard = this.currentCard.decks[0]
    this.turns++;
    let turn = new Turn(guess, currentCard);
    turn.evaluateGuess();
    turn.returnGuess();
    if (!turn.returnGuess()) {
      this.incorrectGuesses.push(currentCard);
    }
    this.currentCard.decks.shift();
  }

  calculatePercentCorrect() {

  }

  endRound() {

  }
}

module.exports = Round;