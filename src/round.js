const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.decks[0];
    return this.currentCard;
  }

  takeTurn(guess) {
    const currentCard = this.deck.decks[0]
    this.turns++;
    let turn = new Turn(guess, currentCard);
    turn.evaluateGuess();
    turn.returnGuess();
    this.deck.decks.shift();
    this.returnCurrentCard();
    if (turn.returnGuess()) {
      this.incorrectGuesses.push(guess);
    } 
  }

  calculatePercentCorrect() {

  }

  endRound() {

  }
}

module.exports = Round;