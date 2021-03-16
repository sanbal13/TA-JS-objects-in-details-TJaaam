/* ### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called) */

/**************  Without Object *************/
/* Question-1 */
let question1Title = "#000 is color code for which color";
let question1Options = ['red', 'blue', 'black', 'white'];
let question1CorrectAnswerIndex = 2;
function question1IsAnswerCorrect(index) {
    return index === question1CorrectAnswerIndex;
} 
function question1GetCorrectAnswer() {
    return question1Options[question1CorrectAnswerIndex];
}

/* Question-2 */
let question2Title = "#fff is color code for which color";
let question2Options = ['red', 'blue', 'black', 'white'];
let question2CorrectAnswerIndex = 3;
function question2IsAnswerCorrect(index) {
    return index === question2correctAnswerIndex;
} 
function question2GetCorrectAnswer() {
    return question2Options[question2CorrectAnswerIndex];
}

/**************  Organize using Objects *************/
/* Question-3 */
const question3 =  {
    title: "#000 is color code for which color",
    options: ['red', 'blue', 'black', 'white'],
    correctAnswerIndex: 2,
    isAnswerCorrect: function(index) {
        return index === question1CorrectAnswerIndex;
    }, 
    getCorrectAnswer: function() {
        return question1Options[question1CorrectAnswerIndex];
    }
}

/* Question-4 */
const question4 =  {
    title: "#fff is color code for which color",
    options: ['red', 'blue', 'black', 'white'],
    correctAnswerIndex: 3,
    isAnswerCorrect: function(index) {
        return index === question1CorrectAnswerIndex;
    }, 
    getCorrectAnswer: function() {
        return question1Options[question1CorrectAnswerIndex];
    }
}

/**************  Use a function to create object *************/

function createObject(title, choices, correctIndex) {
    let obj = {};
    obj.title = title;
    obj.options = choices;
    obj.correctAnswerIndex = correctIndex;
    obj.isAnswerCorrect = function(index) {
        return index === obj.correctAnswerIndex;
    }; 
    obj.getCorrectAnswer =  function() {
        return obj.options[obj.correctAnswerIndex];
    };
    return obj;
}

/* Question-5 */
const question5 = createObject("In which year was the keyword 'let' introduced in JS", [2015, 2010, 2005, 2020], 0);

/**************  Convert the function to use `this` keyword *************/
function createObjectUseThis(title, choices, correctIndex) {
    let obj = {};
    obj.title = title;
    obj.options = choices;
    obj.correctAnswerIndex = correctIndex;
    obj.isAnswerCorrect = function(index) {
        return index === this.correctAnswerIndex;
    }; 
    obj.getCorrectAnswer =  function() {
        return this.options[this.correctAnswerIndex];
    };
    return obj;
}

/* Question-6 */
const question6 = createObjectUseThis("ES6 was introduced in which year", [2005, 2015, 2010, 2020], 1);

/* Tests */
/* const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  }; */

  const question7 = createObjectUseThis('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1 );

  console.group("question6");
  console.log(question6.title);
  console.log(question6.options);
  console.log("Correct Answer Index", question6.correctAnswerIndex);
  console.log("Correct Answer", question6.getCorrectAnswer());
  console.log("2 is correct answer index", question6.isAnswerCorrect(2) );
  console.groupEnd();

  console.group("question7");
  console.log(question7.title);
  console.log(question7.options);
  console.log("Correct Answer Index", question7.correctAnswerIndex);
  console.log("Correct Answer", question7.getCorrectAnswer());
  console.log("2 is correct answer index", question7.isAnswerCorrect(2));
  console.groupEnd();