const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return the first Card in the Deck array', function() {
    const card1 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black'], 'black');
    const decks = new Deck([card1]);
    const round1 = new Round(decks);
  
    expect(round1.currentCard).to.be.a('object');
    expect(round1.returnCurrentCard()).to.equal(card1)
  });  

  it('should return the first Card in the Deck array', function() {
    const card1 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black'], 'black');
    const decks = new Deck([card1]);
    const round1 = new Round(decks);
  
    expect(round1.currentCard).to.be.a('object');
    expect(round1.returnCurrentCard()).to.equal(card1)
  }); 

  // you didn't write any tests for takeTurn! Go back and do this.
  // also, you should start psuedocoding, if for nothing else, you need to do it
  // for the practice!
});  
