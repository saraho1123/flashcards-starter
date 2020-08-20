# Flashcards
___

A JavaScript Project by [Nicole Gooden](https://github.com/nicolegooden).

*Flashcards* is a game that a user can play through the Command Line Interface.  The game is initialized with a deck of 30 cards, and will display a greeting message followed by the first card's data.  The user can choose the answer to the first question by using the arrow up and arrow down keys.  As this action takes place, the number of the selected answer shows up and can be submitted for evaluation when the user hits enter.  The user will then see feedback on the accuracy of their selected answer, and be prompted to answer the next question until there are no more cards in the deck.  When the round terminates, the user will see a message indicating that the round is over, which includes a percentage of questions answered correctly throughout the round.

This project is dependent upon the instantiation of objects from `Classes`, in addition to `Test Driven Development` to verify functionality along the way.
___

## Install / Setup

To play *Flashcards*:

1. Fork this repo to your GitHub profile.  In order to fork this project, you must click the `Fork` button in the top-right corner of your screen.  You can check that this repo is forked by looking at the top-left corner of your browser.  If it shows the `fork` symbol next to `[your-GitHub-username]/flashcards-starter`, then you are on the right track!

1. Clone this forked repo to your local computer.  To do this, click on the green `code` button toward the top of the page.  Ensure that it shows a small window with `Clone with SSH`.  If it says to clone with HTTPS, click on the `Use SSH` blue link within the window to switch.  `SSH` is protected by a password and is more secure.  Next, click on the copy icon to the right of the remote address, or simply highlight the entire address and hit `command C`.  

    To get cloning started, type this command into your terminal from whichever directory you'd like it to exist in:

    `git clone [copied remote address]`

    The remote address can be pasted using `command V`.  When you are satisfied with this command, hit enter.

1. Now, `cd` into the local repo from your terminal.  You will need to type `cd` followed by the name of the repo, which should match that of the remote.

1. After changing into the directory with `cd`, install the library dependencies by running the following command in the terminal:

    `npm install`

1. Verify that everything is working as it should be.  If you run `npm test` in the terminal, there should be 35 passing tests.

1. To play the game (finally!), run the following command in the terminal, from inside of the repo:

      `node index.js`

At this point, you should see a greeting and be prompted to answer the question of the first card of the deck.  Enjoy the game!

**HINT:** To exit the game and start a new round with the same deck, hit `control C`.  You will then need to run the command from step 6 to play again.
___

## Flashcards In Action

![flashcards gif](http://g.recordit.co/xSfIeW7AVC.gif)
