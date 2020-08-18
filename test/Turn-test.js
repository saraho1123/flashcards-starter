const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it.skip('should take a guess as the first argument', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function');

    expect(turn.guess).to.equal('function');
  });

  it.skip('guess argument should be a string', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function');

    expect(turn.guess).to.be.string();
  });

  it.skip('should take a Card object as the second argument', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.currentCard).to.deep.equal(card);
  });

  it.skip('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('function');
  });

  it.skip('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    turn.returnCard();

    expect(turn.returnCard()).to.deep.equal(card);
  });

  it.skip('should determine if the guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should inform user if the guess is correct or incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('incorrect!')
  });
});
