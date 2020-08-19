const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let emptyDeck;
  let deck;
  let turn;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    emptyDeck = new Deck([]);
    deck = new Deck([card1, card2, card3]);
    turn = new Turn('pug', card1);
    round = new Round(deck);
  });

  it.skip('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it.skip('should take a deck as an argument', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it.skip('should have turns set to 0 by default', () => {
    expect(round.turns).to.equal(0);
  });

  // it('should create a new Turn when guess is made', () => {
  //   round.takeTurn('pug');
  //   expect(round.takeTurn()).to.equal();
  // });

  it.skip('should give feedback based on accuracy of guess', () => {
    round.takeTurn('pug');

    expect(round.takeTurn()).to.equal('incorrect!');
  });

  it.skip('should increase number of turns when a turn is taken', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn(turn.guess);

    expect(round.turns).to.equal(1);

    round.takeTurn(turn.guess);

    expect(round.turns).to.equal(2);
  });

  it.skip('should update current card with next card', () => {
    round.takeTurn('pug');

    expect(turn.currentCard).to.deep.equal(card2);
  });

  it.skip('should store incorrect guesses', () => {
    round.takeTurn('pug');

    expect(round.incorrectGuesses).to.deep.equal(round.deck.allCards[1].id);
  });

  it.skip('should indicate which card is currently in play', () => {
    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.deep.equal(turn.currentCard);
  });

  it.skip('should calculate the percentage of correct guesses', () => {
    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal('0%');
  });

  it.skip('should show termination message', () => {
    round.endRound();

    expect(round.endRound()).to.equal('Round over! You answered 0% of the questions correctly!');
  });

  it.skip('should have incorrect guesses set to empty by default', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});
