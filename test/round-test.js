const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1;
  let decks;
  let round1;

  beforeEach(function() {
    card1 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black'], 'black');
    decks = new Deck([card1]);
    round1 = new Round(decks);
    round = new Round();

  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return the first Card in the Deck array', function() {
    expect(round1.currentCard).to.be.a('object');
    expect(round1.returnCurrentCard()).to.equal(card1)
  });  

  it('should return the first Card in the Deck array', function() {
    expect(round1.currentCard).to.be.a('object');
    expect(round1.returnCurrentCard()).to.equal(card1)
  }); 

  // you didn't write any tests for takeTurn! Go back and do this.
  // also, you should start psuedocoding, if for nothing else, you need to do it
  // for the practice!
});  
