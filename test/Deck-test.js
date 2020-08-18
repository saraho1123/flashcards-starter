const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {

  it.skip('should be a function', () => {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it.skip('should be an instance of Deck', () => {
    const deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  });

  it.skip('should take an array of Cards as first argument', () => {
    const card1 = new Card(7, 'Which array prototype is not an accessor method?', ['join()', 'slice()', 'splice()'], 'splice()');
    const card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')
    const card3 = new Card(20, 'forEach() returns an array', ['true', 'false'], 'false')

    const deck = new Deck([card1, card2, card3]);

    expect(deck.allCards).to.deep.equal([card1, card2, card3]);
  });

  it.skip('should count how many Cards are in the Deck', () => {
    const card1 = new Card(7, 'Which array prototype is not an accessor method?', ['join()', 'slice()', 'splice()'], 'splice()');
    const card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')
    const card3 = new Card(20, 'forEach() returns an array', ['true', 'false'], 'false')

    const deck = new Deck([card1, card2, card3]);

    deck.countCards();

    expect(deck.countCards()).to.equal(3);
  });
});
