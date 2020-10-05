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
    if (this.evaluateGuess() === true) {
      return 'correct!';
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;
