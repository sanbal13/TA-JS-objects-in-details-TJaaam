class Question {
    constructor(title, options, correctAnswer) {
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    isCorrect(answer) {
        return this.correctAnswer == answer;        
    }
    getCorrectAnswer() {
        return options[correctAnswer];
    }
    handleClick (event) {
        if(this.isCorrect(event.target.dataset.option)) {
            event.target.style.background ="green";    
            console.log("Correct");
        } else {
            console.log("Wrong");
            event.target.style.background ="red"; 
        }
    }
      createUI() {
        let main = document.querySelector("main");
        let title = document.createElement("div");
        title.innerText = "Capital of " + this.title;
        title.classList.add("title");
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.addEventListener("click", this.handleClick.bind(this));
        let option1 = document.createElement("div");
        option1.innerText = "A) " + this.options[0];
        option1.classList.add("option");
        option1.dataset.option = 0;
        let option2 = document.createElement("div");
        option2.innerText =  "B) " + this.options[1];
        option2.classList.add("option");
        option2.dataset.option = 1;
        let option3 = document.createElement("div");
        option3.innerText = "C) " + this.options[2];
        option3.classList.add("option");
        option3.dataset.option = 2;
        let option4 = document.createElement("div");
        option4.innerText = "D) " + this.options[3];
        option4.classList.add("option");
        option4.dataset.option = 3;

        grid.append(option1, option2, option3, option4);
        main.append(title, grid);
        
    }    
}

class Quiz {
    constructor(allQuestions, activeIndex, score) {
        this.allQuestions = allQuestions;
        this.activeIndex = activeIndex;
        this.score = score;
        this.createUI();
    }
    nextQuestion() {
        this.activeIndex = activeIndex + 1;
    }
    createUI() {
        questions.forEach((question) => {
        question.createUI();
        }
        );
    }
    updateScore(score) {
        this.score = this.score + score; 
    }
}

let questions = [];
let question1 = new Question ("Afganistan", ["Islamabad", "Kabul", "Baku", "Dhaka"], 1);
let question2 = new Question ("Sri Lanka", ["Islamabad", "Kabul", "Colombo", "Dhaka"], 2);
let question3 = new Question ("Japan", ["Tokyo", "Beiging", "Wuhan", "Kabul"], 0);
let question4 = new Question ("Australia", ["Brisbane", "London", "Sydney", "Canberra"], 3);
let question5 = new Question ("South Korea", ["Seoul", "Beijing", "Tokyo", "Wuhan"], 0);
questions.push(question1);
questions.push(question2);
questions.push(question3);
questions.push(question4);
questions.push(question5);

let quiz = new Quiz(questions, 0, 0);
