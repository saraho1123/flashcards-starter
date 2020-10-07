const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');
// const Turn = require('../src/Turn');

describe('Round', function() {
  let round;
  let card1;
  let card2;
  let card3;
  let decks;
  let round1;
  // let turnCorrect;

  beforeEach(function() {
    round = new Round();
    card1 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black'], 'black');
    card2 = new Card(2, 'What location does Isaac like best?', ['beaches', 'mountains', 'deserts'], 'beaches');
    card3 = new Card(3, 'What is Isaac\'s favorite toy?', ['bike', 'cardboard box', 'Legos!'], 'Legos!');
    decks = new Deck([card1, card2, card3]);
    round1 = new Round(decks);
    // turnCorrect = new Turn('black', card1)

  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return the first Card in the Deck array', function() {
    round1.returnCurrentCard()
    expect(round1.currentCard).to.be.a('object');
    expect(round1.deck.decks[0]).to.equal(card1);
    expect(round1.currentCard.id).to.equal(1)
  });  

  it.skip('should instantiate a Turn', function() {
    round1.takeTurn('black');
    //I don't know how to test this. Try again tomorrow!
  });

  it('should count turns', function() {
    round1.takeTurn('black');

    expect(round1.turns).to.equal(1)
  });

  it('should reassign the current card to the next card in the deck', function() {
    round1.takeTurn('black');

    expect(round1.returnCurrentCard()).to.be.a('object');
    expect(round1.deck.decks[0]).to.equal(card2);
    expect(round1.currentCard.id).to.equal(2)
  });

  it('should save incorrect guesses to the incorrectGuesses array', function () {
    round1.takeTurn('blue');

    expect(round1.incorrectGuesses.length).to.equal(1);
    expect(round1.incorrectGuesses[0]).to.equal('blue');
  });

  it('should return correct or incorrect based on the answer', function() {

  });

  // you didn't write any tests for takeTurn! Go back and do this.
  // also, you should start psuedocoding, if for nothing else, you need to do it
  // for the practice!

  // takeTurn 
  // needs to test that there is a new instantiation of Turn
  // DONE! test the turns counter when answer is correct and when answer is incorrect
  // DONE! test that the current card is the next card that was in the array
  // DONE!test that incorrect guesses are stored in the incorrectGuesses array 
  // NOTE the spec says it needs to be via the id ????What id? the cards have an id, but no the guess
  // test that the correct return statement is returned based on answer
  //
});  
