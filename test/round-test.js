const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');
const Turn = require('../src/Turn');

describe('Round', function() {
  // let round;
  let card1;
  let card2;
  let card3;
  let decks;
  let round1;
  // let turnCorrect;

  beforeEach(function() {
    // round = new Round();
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
    expect(round1).to.be.an.instanceof(Round);
  }); 


// test the properties FIRST! before testing the methods. use an it block for each property.

  it('should return the first Card in the Deck array', function() {
  
    expect(round1.returnCurrentCard()).to.equal(card1)
  });  

  // it.skip('should instantiate a Turn', function() {
  //   let turn;
  //   round1.takeTurn('black');

  //   expect(turn).to.be
  //   //I don't know how to test this. Try again tomorrow!

  // });

  it('should count turns', function() {
    round1.takeTurn('black');

    expect(round1.turns).to.equal(1)
  });

  it('should reassign the current card to the next card in the deck', function() {
    round1.takeTurn('black');

    expect(round1.deck.decks[0]).to.equal(card2);
    expect(round1.currentCard.id).to.equal(2)
  });

  it('should save incorrect guesses to the incorrectGuesses array', function () {
    round1.takeTurn('blue');

    expect(round1.incorrectGuesses.length).to.equal(1);
    expect(round1.incorrectGuesses[0]).to.equal(1);

    round1.takeTurn('beaches');

    expect(round1.incorrectGuesses.length).to.equal(1);
    expect(round1.incorrectGuesses[0]).to.equal(1);
  });


  it('should return correct or incorrect based on the answer', function() {
    expect(round1.takeTurn('black')).to.equal('correct!');
    expect(round1.takeTurn('mountains')).to.equal('incorrect!');
  });

  // test for calculatePercentage
  // test that it is a percentage (66%). 
  // NEED method for converting number to percentage!
  // or concate with a %?? (probably use math.floor to round to whole number?)
  it('should return percentage of correct guesses', function () {
    round1.takeTurn('black');
    round1.takeTurn('beaches');
    round1.takeTurn('cardboard box');

    expect(round1.calculatePercentCorrect()).to.equal('67%');
  });

  // test endRound
  // need a return statement that accesses the return of calculatePercentCorrect
  // return ** Round over! ** You answered ${this.calculatePercentCorrect} of the questions correctly!
  it('should end the game with a statement that includes percentage correct', function() {
    round1.takeTurn('black');
    round1.takeTurn('beaches');
    round1.takeTurn('cardboard box');

    expect(round1.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!');
  })

});  
