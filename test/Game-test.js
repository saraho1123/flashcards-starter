const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  }); 

  // Below are tests that I know I should be running, 
  // but I am not sure how to make them happen.
  // NOTE: I will likely need more requires above in order to run/pass these tests.

  it('should create cards', function() {
    game.start();
    console.log(game.currentRound)
    expect(game.currentRound).to.be.an.instanceof(Card);
  });

  it('should instantiate a new deck of cards', function() {
    game.start();
    console.log(game.deck.decks[0])
    expect(game.deck.decks[0]).to.be.an.instanceof(Card)
    // I think this one can be checked by the fact that game.currentRound is deck, rather than an instance of?
  });

  it.skip('should instantiate a new round of the flashcard game', function() {
    // I'm uncertain how to test this, but I assume it is similar to the test above, if it is needed at all.
  });

});