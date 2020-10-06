class Turn {
  constructor(answerAttempt, questionCard) {
    this.answerAttempt = answerAttempt;
    this.questionCard = questionCard;
  }

  returnGuess() {
    return this.answerAttempt;
  }

  returnCard() {
    return this.questionCard;
  }

  evaluateGuess() { 
    return this.answerAttempt === this.questionCard.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!'
  }
}

module.exports = Turn;
