// Prototypal pattern

let questionsMethods = {
    isAnswerCorrect: function(index) {
        if(index === this.correctAnswerIndex) {
            return true;
        } else {
            return false;
        }
    },
    getCorrectAnswer: function() {
        return this.isAnswerCorrect;
    },
};

function Question(title, options, correctAnswerIndex) {
    let question = Object.create(questionsMethods);
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;

    return question;
}

// Pseudoclassical Pattern

function Question(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;

}

Question.prototype = {
    isAnswerCorrect: function(index) {
        if(index === this.correctAnswerIndex) {
            return true;
        } else {
            return false;
        }
    },
    getCorrectAnswer: function() {
        return this.isAnswerCorrect;
    },
}

// Class

class Question {
    constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index) {
        if(index === this.correctAnswerIndex) {
            return true;
        } else {
            return false;
        }
    }
    getCorrectAnswer() {
        return this.isAnswerCorrect;
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );