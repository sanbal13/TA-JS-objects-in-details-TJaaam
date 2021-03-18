/* - Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)
 */

  /*  Prototypal pattern of object creation (Put methods inside an object and create object using Object.create) */
  function createQuestion(title, options, correctIndex) {
      let question = Object.create(questionMethods);
      question.title = title;
      question.options = options;
      question.correctAnswerIndex = correctIndex;
      return question;
  }
  let questionMethods = {
      isAnswerCorrect: function(index) {
          return index === this.correctAnswerIndex;
      },
      getCorrectAnswer: function() {
          return this.options[this.correctAnswerIndex];
      }
  }

  let firstQuestion = createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = createQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
  /*  Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function) */
  function CreateQuestionPrototype(title, options, correctIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctIndex;
   }
   CreateQuestionPrototype.prototype = {
    isAnswerCorrect: function(index) {
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function() {
        return this.options[this.correctAnswerIndex];
    }
}

let question01 = new CreateQuestionPrototype(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let question02 = new CreateQuestionPrototype(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

  /*  Create using class */
  class Question {
      constructor(title, options, correctIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctIndex;
       }       
        isAnswerCorrect(index) {
            return index === this.correctAnswerIndex;
        }
        getCorrectAnswer() {
            return this.options[this.correctAnswerIndex];
        } 
  }

  /*  Write test by creating two objects also test both methods.   */
  let questionOne = new Question(  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1);
  let questionTwo = new Question(  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2);

  console.group("Question-01");
  console.log(questionOne.title);
  console.log(questionOne.options);
  console.log(questionOne.correctAnswerIndex, "Correct Option");
  console.log(questionOne.getCorrectAnswer(), "'Correct Answer'");
  console.log("Is option 2 correct?",questionOne.isAnswerCorrect(2));
  console.groupEnd("Question-01");

  console.group("Question-02");
  console.log(questionTwo.title);
  console.log(questionTwo.options);
  console.log(questionTwo.correctAnswerIndex, "Correct Option");
  console.log(questionTwo.getCorrectAnswer(), "'Correct Answer'");
  console.log("Is option 2 correct?",questionTwo.isAnswerCorrect(2));
  console.groupEnd("Question-02");