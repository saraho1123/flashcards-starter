// what exactly is currentRound??
// is it a counter of rounds played?
// or an instance of Round??
// maybe this.currentRound = new Round(deck);

// start: method that starts everything
// Creates Cards
// Puts Cards in a Deck
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
// Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the 
//requirements in the past iterations.

// start()
// instantiate Card objects OR just use prototypeData in new Deck?
// use a sampe data file for this.
// instantiate Deck with the card instances created
// instantiate Round with Deck as argument??
// call printMessage printQuestion

const chai = require('chai');
const expect = chai.expect;

// const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');
const Turn = require('../src/turn');
const sampleData = require('../src/sampledata');
const util = require('../src/util');
const Game = require('../src/Game');

describe('Game', function() {
  let game;
  // let card2;
  // let card3;
  // let decks;
  // let round1;

  beforeEach(function() {
    game = new Game(); 
    // card1 = (1, 'What is Isaac\'s favorite color?', ['blue', 'orange', 'black'], 'black');
    // card2 = new Card(2, 'What location does Isaac like best?', ['beaches', 'mountains', 'deserts'], 'beaches');
    // card3 = new Card(3, 'What is Isaac\'s favorite toy?', ['bike', 'cardboard box', 'Legos!'], 'Legos!');
    // decks = new Deck([card1, card2, card3]);
    // round1 = new Round(decks);

  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it.skip('should create cards', function() {
    // I'm a little confused on this one. 
    // after I run start() ... test this.currentRound
    // expect(game.cards[0]).to.be.an.instanceof(Card);
  });

  it.skip('should instantiate a new deck of cards', function() {
    // I'm uncertain how to test this.
    //expect(game.deck.decks[0]).to.be.an.instanceof(Card)
    //I think this one can be checked by c
  });

  it.skip('should instantiate a new round of the flashcard game', function() {
    // I'm uncertain how to test this.
  });

  it('should')

  
});