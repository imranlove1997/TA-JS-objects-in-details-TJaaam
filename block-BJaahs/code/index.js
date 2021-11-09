function createAnswers(title, options, correctAnswerIndex) {
    let quiz = {};
    quiz.title = title;
    quiz.options = options;
    quiz.correctAnswerIndex = correctAnswerIndex;
    quiz.AnswerCorrect = function(value) {
        if(value === this.correctAnswerIndex) {
            return true;
        } else {
            return false;
        }
    };
    quiz.getCorrectAnswer = function () {
        return this.correctAnswerIndex;
    };
    return quiz;
}

let quiz1 = createAnswers("20+20=?", [20, 40, 50 ,60], 40);
let quiz2 = createAnswers("20+10=?", [20, 40, 50 ,60], 50);

console.group("Quiz 1");
console.log(quiz1);
console.log(quiz1.title);
console.log(quiz1.options);
console.log(quiz1.AnswerCorrect(40));
console.log(quiz1.getCorrectAnswer());
console.groupEnd();

console.group("Quiz 2");
console.log(quiz2);
console.log(quiz2.title);
console.log(quiz2.options);
console.log(quiz2.AnswerCorrect(50));
console.log(quiz2.getCorrectAnswer());
console.groupEnd();