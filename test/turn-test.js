const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store an attempted answer', function() {
    const turn = new Turn('black');
    expect(turn.returnGuess()).to.equal('black');
  });  

  it('should store a card object', function() {
    const card = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'red', 'black'], 'black');
    const turn = new Turn('black', card);
    expect(turn.returnCard()).to.be.an.instanceof(Card);
  });  

  it('should return true for a correct answer attempt', function() {
    const card = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'red', 'black'], 'black');
    const turn = new Turn('black', card);
    expect(turn.evaluateGuess()).to.equal(true);
  }); 

  it('should return false for acorrect answer attempt', function() {
    const card = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'red', 'black'], 'black');
    const turn = new Turn('blue', card);
    expect(turn.evaluateGuess()).to.equal(false);
  }); 

  it('should tell user if their attempt was correct', function() {
    const card = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'red', 'black'], 'black');
    const turn1 = new Turn('blue', card);
    const turn2 = new Turn('black', card);
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  }); 
});