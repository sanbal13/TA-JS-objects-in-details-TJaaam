/* 
properties (data):
  name
  id
  noOfProjects
methods:
  getProjects -> return number of project
  changeName -> accepts one parameter (newName)returns old user name
  incrementProject -> returns updated number of projects
  decrementProject -> returns updated number of projects
 */  


/* Using function to create object */
function createUser(name, id, noOfProjects) {
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    user.getProjects = function() {
        return user.noOfProjects;
    }
    user.changeName = function(newName) {
        let oldName = user.name;
        user.name = newName;
        return oldName;
    }
    user.incrementProject = function(value =1) {
        user.noOfProjects += value;
        return user.noOfProjects;
    }
    user.decrementProject = function(value =1) {
        user.noOfProjects -= value;
        return user.noOfProjects;
    }
    return user;
}

let user01 = createUser("Arya", 101, 10);
let user02 = createUser("John", 102, 5);

console.group("user01");
console.log("Name: ", user01.name);
console.log("Id: ", user01.id);
console.log("No. of Projects: ", user01.noOfProjects);
console.log("After increasing the no. of Projects by 2: ", user01.incrementProject(2));
console.log("After decreasing the no. of Projects by 2: ", user01.decrementProject(2));
console.log("After changing the name to Brain :");
console.log("Old Name: ", user01.changeName("Brain"));
console.log("New Name: ", user01.name);
console.groupEnd("user01");

console.group("user02");
console.log("Name: ", user02.name);
console.log("Id: ", user02.id);
console.log("No. of Projects: ", user02.noOfProjects);
console.log("After increasing the no. of Projects by 2: ", user02.incrementProject(2));
console.log("After decreasing the no. of Projects by 2: ", user02.decrementProject(2));
console.log("After changing the name to Brain :");
console.log("Old Name: ", user02.changeName("Brain"));
console.log("New Name: ", user02.name);
console.groupEnd("user02");

/* Using Object.create (prototypal pattern) */
function createUserProto(name, id, noOfProjects) {
    let user = Object.create(userMethods);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    return user;
}
let userMethods = {
    changeName: function(newName) {
        let oldName = this.name;
        this.name = newName;
        return oldName;
    },
    incrementProject: function(value =1) {
        this.noOfProjects += value;
        return this.noOfProjects;
    },
    decrementProject: function(value =1) {
        this.noOfProjects -= value;
        return this.noOfProjects;
    }
}

let user001 = createUserProto("Perl", 103, 20);
let user002 = createUserProto("John", 104, 40);

console.group("user001");
console.log("Name: ", user001.name);
console.log("Id: ", user001.id);
console.log("No. of Projects: ", user001.noOfProjects);
console.log("After increasing the no. of Projects by 2: ", user001.incrementProject(2));
console.log("After decreasing the no. of Projects by 2: ", user001.decrementProject(2));
console.log("After changing the name to Brain :");
console.log("Old Name: ", user001.changeName("Brain"));
console.log("New Name: ", user001.name);
console.groupEnd("user001");

console.group("user002");
console.log("Name: ", user002.name);
console.log("Id: ", user002.id);
console.log("No. of Projects: ", user002.noOfProjects);
console.log("After increasing the no. of Projects by 2: ", user002.incrementProject(2));
console.log("After decreasing the no. of Projects by 2: ", user002.decrementProject(2));
console.log("After changing the name to Brain :");
console.log("Old Name: ", user002.changeName("Brain"));
console.log("New Name: ", user002.name);
console.groupEnd("user002");

/* Using Pseudoclassical Way */

function CreateUserPseudo(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}
CreateUserPseudo.prototype = {
    changeName: function(newName) {
        let oldName = this.name;
        this.name = newName;
        return oldName;
    },
    incrementProject: function(value =1) {
        this.noOfProjects += value;
        return this.noOfProjects;
    },
    decrementProject: function(value =1) {
        this.noOfProjects -= value;
        return this.noOfProjects;
    }
}

let user0001 = new CreateUserPseudo("Carl", 105, 25);
let user0002 = new CreateUserPseudo("Grace", 106, 30);

console.group("user0001");
console.log("Name: ", user0001.name);
console.log("Id: ", user0001.id);
console.log("No. of Projects: ", user0001.noOfProjects);
console.log("After increasing the no. of Projects by 2: ", user0001.incrementProject(2));
console.log("After decreasing the no. of Projects by 2: ", user0001.decrementProject(2));
console.log("After changing the name to Brain :");
console.log("Old Name: ", user0001.changeName("Brain"));
console.log("New Name: ", user0001.name);
console.groupEnd("user0001");

console.group("user0002");
console.log("Name: ", user0002.name);
console.log("Id: ", user0002.id);
console.log("No. of Projects: ", user0002.noOfProjects);
console.log("After increasing the no. of Projects by 2: ", user0002.incrementProject(2));
console.log("After decreasing the no. of Projects by 2: ", user0002.decrementProject(2));
console.log("After changing the name to Brain :");
console.log("Old Name: ", user0002.changeName("Brain"));
console.log("New Name: ", user0002.name);
console.groupEnd("user0002");

/* Using Class */
class User {
    constructor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    changeName(newName) {
        let oldName = this.name;
        this.name = newName;
        return oldName;
    }
    incrementProject(value = 1) {
        this.noOfProjects += value;
        return this.noOfProjects;
    }
    decrementProject(value = 1) {
        this.noOfProjects -= value;
        return this.noOfProjects;
    }
}

let userOne = new CreateUserPseudo("Kent", 107, 50);
let userTwo = new CreateUserPseudo("Paul", 108, 60);

console.group("userOne");
console.log("Name: ", userOne.name);
console.log("Id: ", userOne.id);
console.log("No. of Projects: ", userOne.noOfProjects);
console.log("After increasing the no. of Projects by 2: ", userOne.incrementProject(2));
console.log("After decreasing the no. of Projects by 2: ", userOne.decrementProject(2));
console.log("After changing the name to Brain :");
console.log("Old Name: ", userOne.changeName("Brain"));
console.log("New Name: ", userOne.name);
console.groupEnd("userOne");

console.group("userTwo");
console.log("Name: ", userTwo.name);
console.log("Id: ", userTwo.id);
console.log("No. of Projects: ", userTwo.noOfProjects);
console.log("After increasing the no. of Projects by 2: ", userTwo.incrementProject(2));
console.log("After decreasing the no. of Projects by 2: ", userTwo.decrementProject(2));
console.log("After changing the name to Brain :");
console.log("Old Name: ", userTwo.changeName("Brain"));
console.log("New Name: ", userTwo.name);
console.groupEnd("userTwo");