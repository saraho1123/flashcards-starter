const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let decks1;
  let deck1;

  beforeEach(function() {
    card1 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black'], 'black');
    card2 = new Card(2, 'What location does Isaac like best?', ['beaches', 'mountains', 'deserts'], 'beaches');
    card3 = new Card(3, 'What is Isaac\'s favorite toy?', ['bike', 'cardboard box', 'Legos!'], 'Legos!');
    decks1 = [card1, card2, card3];
    deck1 = new Deck(decks1);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck1).to.be.an.instanceof(Deck);
  }); 

  it('should store arrays of Card objects', function() {
    expect(deck1.decks[0].id).to.equal(1);
    expect(deck1.decks[1].question).to.equal('What location does Isaac like best?');
    expect(deck1.decks[2].correctAnswer).to.equal('Legos!');
  });  

  it('should count number of cards in the deck', function() {
    let numberOfCards = deck1.countCards();

    expect(numberOfCards).to.equal(3);
  });  

  // what other tests here?
});  
