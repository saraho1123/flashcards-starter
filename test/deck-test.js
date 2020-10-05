const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should store arrays of Card objects', function() {
    const card1 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black'], 'black');
    const card2 = new Card(2, 'What location does Isaac like best?', ['beaches', 'mountains', 'deserts'], 'beaches');
    const card3 = new Card(3, 'What is Isaac\'s favorite toy?', ['bike', 'cardboard box', 'Legos!'], 'Legos!');
    const decks = [card1, card2, card3];
    const deck1 = new Deck(decks);
 
    expect(deck1.deck[0].id).to.equal(1);
    expect(deck1.deck[1].question).to.equal('What location does Isaac like best?');
    expect(deck1.deck[2].correctAnswer).to.equal('Legos!');

  });  

  it('should count number of cards in the deck', function() {
    const card1 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black'], 'black');
    const card2 = new Card(2, 'What location does Isaac like best?', ['beaches', 'mountains', 'deserts'], 'beaches');
    const card3 = new Card(3, 'What is Isaac\'s favorite toy?', ['bike', 'cardboard box', 'Legos!'], 'Legos!');
    const decks = [card1, card2, card3];
    const deck1 = new Deck(decks);

    let numberOfCards = deck1.countCards();

    expect(numberOfCards).to.equal(3);
  });  
});  
