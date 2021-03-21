/****** Square *******/
class Square {

    numberOfTimes = 0;

    constructor(side) {
        this.width = side;
        this.height = side;
    }
    
    description () {
        alert (`This square is ${this.width} X ${this.height}`);
    }

    calcArea () {
        return this.width * this.height +" sq.units.";
    }

    get area() {
        this.numberOfTimes++;
        if(this.numberOfTimes > 4) {
            alert("Upper Limit Reached");
        } else {
            return this.width * this.height +" sq.units.";
        }
    }

    set area(area) {
        if(Math.sqrt(area) === Math.floor(Math.sqrt(area))) {
            this.width = Math.sqrt(area);
            this.height = Math.sqrt(area);
        } else {
            alert("Not a valid input");
        }
    }

    static isEqual(obj1, obj2) {
           return obj1.area === obj2.area;
    }
}
let sqr01 = new Square(10);
let sqr02 = new Square(5);

/* ***** User ****** */
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(str) {
        if(str.length < 5) {
            alert(`Full name should be more than 5 characters`);
        } else {
            this.firstName = str.slice(0, str.indexOf(" "));
            this.lastName = str.slice(str.indexOf(" ")+1);       
        }
    }

    nameContains(str) {
        return this.fullName.includes(str);
    }

}

let user01 = new User('Sam', 'Curran');
let user02 = new User('Rohit', 'Sharma');

user01.fullName ="Rahul Dravid";
//user02.fullName = "Rahu"; 

console.log(user02.fullName);
console.log(user02.nameContains("hat"));
console.log(user02.nameContains("hit"));