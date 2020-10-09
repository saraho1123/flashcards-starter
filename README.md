# FlashCards
## Solo Project for Turing-Mod 2

## Project Summary

This is a game for developers-in-training! The game includes 30 questions cards that can be answered in the terminal to find out how your software vocab is coming along for this module! 

The project was our first introduction to using TDD and writing our own unit tests for our implementation code. We were asked to use beforeEach() and sad path testing, which are new concepts at this point in our learning. I am hoping to return to this project at some point to write better (and perhaps more) sad path tests.

## Playing the Game
Playing the game will require some setup:

Fork and clone down the repo.

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

    npm install


Verify that the game is working by running:

    npm test
    
The terminal should show 32 passing tests.

To play the game run the following command in the terminal:

    node index.js

At this point, you should see a greeting and be prompted to answer the question of the first card of the deck. 

To answer, use the `up` and `down` arrow keys to highlight your answer and hit `enter`. <br>
Alternately, you can type the number of the answer you choose and it `enter`.

Enjoy the game!

**HINT:** To exit the game and start a new round with the same deck, hit `control C`.  You will then need to run 
`node index.js` to play the game again.


## Flashcards Game Play
Note that this gif shows a console log of all the game plays cards (which includes correct answers) when the game first begins. This has been removed for future game play.

![flashcards gif](/readme-gifs/flashcard-play-game.gif)
