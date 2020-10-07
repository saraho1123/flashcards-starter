const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn;
  let turn1;
  let turn2;
  let card;

  beforeEach(function() {
    turn = new Turn();
    turn1 = new Turn('black', card);
    turn2 = new Turn('blue', card);
    card = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'red', 'black'], 'black');
  });


  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store an attempted answer', function() {
    expect(turn1.returnGuess()).to.equal('black');
  });  

  it('should store a card object', function() {
    expect(turn1.returnCard()).to.be.an.instanceof(Card);
  });  

  it('should return true for a correct answer attempt', function() {
    expect(turn1.evaluateGuess()).to.equal(true);
  }); 

  it('should return false for acorrect answer attempt', function() {
    expect(turn2.evaluateGuess()).to.equal(false);
  }); 

  it('should tell user if their attempt was correct', function() {
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  }); 
});
