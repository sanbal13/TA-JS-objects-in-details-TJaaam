class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
            console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }
    walk() {
        console.log("Walk");
    }
}

class Player extends Person {
    constructor(name, age, gender, sportsName) {
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    play() {
        console.log("Play " + this.sportsName);
    }
}
class Teacher extends Person {
    constructor(name, age, gender,instituteName) {
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach() {
        console.log("Teaching at "+ this.instituteName);
    }

}
class Artist extends Person {
    constructor(name, age, gender,kind) {
        super(name, age, gender);
        this.kind = kind;
    }
    createArt() {
        console.log("I create art of " + this.kind);
    }
}
class Cricketer extends Player {
 constructor(name, age, gender, teamName) {
    super(name, age, gender, "Cricket");
    this.teamName = teamName;
 }      
 playCricket() {
     console.log("Play Cricket for " + this.teamName);
 } 
}

let person = new Person("Arya", 25, "Female");
let player = new Player("Anil", 30, "Male","football");
let teacher = new Teacher("Radhika", 22, "Female","IIT");
let artist = new Artist("Sachin", 45, "Male", "Painting");
let cricketer = new Cricketer("Rahul", 24, "Male","Punjab");