// factory 

/* function createUser(name, id, noOfProjects) {
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;

    user.getProjects = function() {
        return user.noOfProjects;
    };
    user.changeName = function(newName) {
        let oldName = user.name;
        user.name - newName;
        return oldName;
    };
    user.incrementProject = function() {
        user.noOfProjects += 1;
        return user.noOfProjects;
    };
    user.decrementProject = function() {
        user.noOfProjects -= 1;
        return user.noOfProjects;
    };
    return user;
} */

// prototypal pattern

/* let userMethods = {
    getProjects: function() {
        return this.noOfProjects;
    },
    changeName: function(newName) {
        let oldName = this.name;
        this.name - newName;
        return oldName;
    },
    incrementProject: function() {
        this.noOfProjects += 1;
        return this.noOfProjects;
    },
    decrementProject: function() {
        this.noOfProjects -= 1;
        return this.noOfProjects;
    },
};

function createUser(name, id, noOfProjects) {
    let user = Object.create(userMethods);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    return user;
} */

// Pseudoclassical Way

/* function CreateUser(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}
CreateUser.prototype = {
    getProjects: function() {
        return this.noOfProjects;
    },
    changeName: function(newName) {
        let oldName = this.name;
        this.name - newName;
        return oldName;
    },
    incrementProject: function() {
        this.noOfProjects += 1;
        return this.noOfProjects;
    },
    decrementProject: function() {
        this.noOfProjects -= 1;
        return this.noOfProjects;
    },
};
 */

// Class

class User {
    constructor(name, id, noOfProjects = 0) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    }
    getProjects() {
        return this.noOfProjects;
    }
    changeName(newName) {
        let oldName = this.name;
        this.name - newName;
        return oldName;
    }
    incrementProject() {
        this.noOfProjects += 1;
        return this.noOfProjects;
    }
    decrementProject() {
        this.noOfProjects -= 1;
        return this.noOfProjects;
    }
}

let first = new User("Altcampus", 12, 3);
let second = new User("Bootcamp", 24, 5);