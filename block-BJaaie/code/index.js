/**************************** Pseudoclassical Pattern ********************************/

/* Animal */
function CreateAnimal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}
CreateAnimal.prototype = {
    eat : function() {
            console.log(`I live in ${this.location} and I can eat`);
             },
    changeLocation : function(location) {
                this.location = location;
                return this.location;
             },
    summary : function() {
                return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
            }
}

/* Dog */
function CreateDog(location, numberOfLegs, name, color) {
    CreateAnimal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.color = color;
}
CreateDog.prototype = {
    bark: function() {
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(name) {
        this.name = name;
        return this.name;
    },
    changeColor: function(color) {
        this.color = color;
        return this.color;
    },
    summary: function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}
Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);

/* Cat */
function CreateCat(location, numberOfLegs, name, colorOfEyes) {
    CreateAnimal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}
CreateCat.prototype = {
    meow: function() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName: function(newName) {
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },
    summary: function() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}
Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

/* Creating Objects */
let animal = new CreateAnimal("India", 4);
let dog = new CreateDog("Japan", 4, "Dexter","brown");
let cat = new CreateCat("China", 4, "Tom", "black");

/* Tests */
console.group("Animal");
console.log("Name: ", animal.name);
console.log("Number of legs: ", animal.numberOfLegs);
animal.eat();
console.log("Location Changed to: ", animal.changeLocation("France"));
console.log(animal.summary());
console.groupEnd("Animal");

console.group("Dog");
dog.bark();
console.log("Name: ", dog.name);
console.log("Number of legs: ", dog.numberOfLegs);
console.log("Color: ", dog.color);
dog.eat();
console.log("Name changed to: ", dog.changeName("Dixon"));
console.log("Color changed to: ", dog.changeColor("brown"));
console.log("Location Changed to: ", dog.changeLocation("France"));
console.log(dog.summary());
console.groupEnd("Dog");

console.group("Cat");
cat.meow();
console.log("Name: ", cat.name);
console.log("Number of legs: ", cat.numberOfLegs);
console.log("Color of Eyes: ", cat.colorOfEyes);
cat.eat();
console.log("Name changed to: ", cat.changeName("catty"));
console.log("Color of Eyes changed to: ", cat.changeColorOfEyes("green"));
console.log("Location Changed to: ", cat.changeLocation("Germany"));
console.log(cat.summary());
console.groupEnd("Cat");


/**************************** Class Pattern ********************************/
console.log("************************Using Class**************************");
/* Animal */
class Animal {
    constructor(location, numberOfLegs) { 
    this.location = location;
    this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(location) {
        this.location = location;
        return this.location;
    }
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    }
}

/* Dog */
class Dog extends Animal {    
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs);    
        this.name = name;
        this.color = color;
    }

    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    }
    changeName(name) {
        this.name = name;
        return this.name;
    }
    changeColor(color) {
        this.color = color;
        return this.color;
    }
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

/* Cat */
class Cat extends Animal {
    constructor(location, numberOfLegs, name, colorOfEyes){
        super(location, numberOfLegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(newName) {
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}
Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

/* Creating Objects */
 animal = new Animal("India", 4);
 dog = new Dog("Japan", 4, "Dexter","brown");
 cat = new Cat("China", 4, "Tom", "black");

/* Tests */
console.group("Animal");
console.log("Name: ", animal.name);
console.log("Number of legs: ", animal.numberOfLegs);
animal.eat();
console.log("Location Changed to: ", animal.changeLocation("France"));
console.log(animal.summary());
console.groupEnd("Animal");

console.group("Dog");
dog.bark();
console.log("Name: ", dog.name);
console.log("Number of legs: ", dog.numberOfLegs);
console.log("Color: ", dog.color);
dog.eat();
console.log("Name changed to: ", dog.changeName("Dixon"));
console.log("Color changed to: ", dog.changeColor("brown"));
console.log("Location Changed to: ", dog.changeLocation("France"));
console.log(dog.summary());
console.groupEnd("Dog");

console.group("Cat");
cat.meow();
console.log("Name: ", cat.name);
console.log("Number of legs: ", cat.numberOfLegs);
console.log("Color of Eyes: ", cat.colorOfEyes);
cat.eat();
console.log("Name changed to: ", cat.changeName("catty"));
console.log("Color of Eyes changed to: ", cat.changeColorOfEyes("green"));
console.log("Location Changed to: ", cat.changeLocation("Germany"));
console.log(cat.summary());
console.groupEnd("Cat");


