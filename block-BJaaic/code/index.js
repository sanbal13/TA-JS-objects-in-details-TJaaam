/****** Animal Methods ******/  
let animalMethods = {
    eat: function() {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary: function() {
        return `I live in ${this.location} and I have ${this.noOfLegs} legs`;
    }

}

/****** Dog Methods ******/
let dogMethods = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(name){
        this.name = name;
        return this.name;
    },
    changeColor: function(color){
        this.color = color;
        return this.color;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

/****** Dunderproto for Dog *******/ 
Object.setPrototypeOf(dogMethods, animalMethods);

/****** Cat Methods ******/
let catMethods = {
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

/****** Dunderproto for Cat *******/ 
Object.setPrototypeOf(catMethods, animalMethods);

/****** Create Animal *******/ 
function createAnimal(location, noOfLegs) {
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.noOfLegs = noOfLegs;
    return animal;
}

/****** Create Dog *******/
function createDog(location, noOfLegs, name, color) {
    let dog = Object.create(dogMethods);
    dog.location = location;
    dog.noOfLegs = noOfLegs;
    dog.name = name;
    dog.color = color;
    return dog;
}

/****** Create Cat *******/
function createCat(location, noOfLegs, name, colorOfEyes) {
    let cat = Object.create(catMethods);
    cat.location = location;
    cat.noOfLegs = noOfLegs;
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}

/* ***** Object Creation ***** */
let animal = createAnimal("Jaipur", 4);
let dog = createDog("Vijay Nagar", 4, 'Pochi', 'brown');
let cat = createCat("Kota", 4, 'kittie', 'green');

/****** Tests ******/
/* Animal */
console.group("Animal");
console.log("Location: " + animal.location);
console.log("No. of legs: " + animal.noOfLegs);
animal.eat();
console.log("New Location: "+ animal.changeLocation("Raipur"));
console.log(animal.summary());
console.groupEnd("Animal");

/* Dog */
console.group("Dog");
dog.bark();
console.log("Location: " + dog.location);
console.log("No. of legs: " + dog.noOfLegs);
console.log("Name: " + dog.name);
console.log("Color: " + dog.color);
dog.eat();
console.log("New Location: "+ dog.changeLocation("Shimla"));
console.log("My new Name: "+ dog.changeName("Dexter"));
console.log("My new Color: " + dog.changeColor("white"));
console.log(dog.summary());
console.groupEnd("Dog");

/* Cat */
console.group("Cat");
cat.meow();
console.log("Location: " + cat.location);
console.log("No. of legs: " + cat.noOfLegs);
console.log("Name: " + cat.name);
console.log("Color of Eyes: " + cat.colorOfEyes);
cat.eat();
console.log("New Location: "+ cat.changeLocation("Manali"));
console.log("My new Name: "+ cat.changeName("Tom"));
console.log("My new Color Of Eyes: " + cat.changeColorOfEyes("blue"));
console.log(cat.summary());
console.groupEnd("Cat");
