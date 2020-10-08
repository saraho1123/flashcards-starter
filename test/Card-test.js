const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;
  let wrongCard1;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    wrongCard1 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black', 'purple'], 'black');
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
    expect(wrongCard1).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(wrongCard1.question).to.equal('What is Isaac\'s favorite color?');
  });  

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(wrongCard1.answers).to.deep.equal(['blue', 'orange', 'black', 'purple']);
  });  

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('object');
    expect(wrongCard1.correctAnswer).to.equal('black');
  });
});

describe('Card sad path tests', function() {
  // TODO:
  // need to use wrongCard and then write functionality to limit answers and correctAnswers.
  // use wrongCard1 and wrongCard2 for tests.
  // I may not have time to complete these tests.
  let card;
  // let wrongCard1;
  // let wrongCard2;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    // wrongCard1 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black', 'purple'], 'black');
    // wrongCard2 = new Card(1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black', 'purple'], 23);
  });

  it('should have an id that is an number', function() {
    expect(card.id).to.be.a('number');
  });

  it('should have answer that is a string', function() {
    expect(card.correctAnswer).to.be.a('string');
  });

  it('should have a multiple choice answer set that is an array', function() {
    expect(card.answers).to.be.a('array');
  });

  it('should have an multiple choice answer set that contains 3 choices', function() {
    expect(card.answers.length).to.equal(3);
  });

  it('should have multiple choices for answers that are all strings', function() {
    expect(card.answers[0]).to.be.a('string');
    expect(card.answers[1]).to.be.a('string');
    expect(card.answers[2]).to.be.a('string');
  });
});
