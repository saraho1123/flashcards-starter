const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor(currentRound = null) {
    this.currentRound = currentRound;
  }

  start() {
    const myCards = prototypeQuestions.map(question => {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      return card;
    })
    const deck = new Deck(myCards);
    this.currentRound = new Round(deck);
    const round = this.currentRound;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
};

module.exports = Game;
