const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.decks[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.decks[0];
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    let turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    } 
    this.deck.decks.shift();
    this.returnCurrentCard();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correctGuesses = this.turns - this.incorrectGuesses.length;
    let percentCorrect = Math.round(correctGuesses / this.turns * 100);
    return `${percentCorrect}%`;
  }

  endRound() {
    const endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`;
    return endMessage;
  }
}

module.exports = Round;