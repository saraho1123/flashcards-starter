const data = require('./data');
const Deck = require('./deck');
const Round = require('./round');
const prototypeQuestions = data.prototypeData;

const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    console.log('Here\'s the game!')
    const deck = new Deck(prototypeQuestions);
    console.log(deck);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, this.currentRound );
    this.printQuestion(this.currentRound );
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
}

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;