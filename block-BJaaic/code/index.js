let animalMethods = {
    eat: function() {
        console.log(` I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation) {
        this.newLocation = newLocation;
        return this.newLocation;
    },
    summary: function() {
        console.log(`I live in ${this.location} and I have ${this.numberofLegs}`);
    },
};

let dogMethods = {
    bark: function() {
        alert(`I am ${this.name} and i can bark`);
    },
    changeName: function(newName) {
        this.newName = newName;
        return this.newName;
    },
    changeColor: function(newColor) {
        this.newColor = newColor;
        return this.newColor;
    },
    summary: function() {
        return `I am ${this.name} and I am of ${this.newColor}color . I can also bark`;
    },
};


let catMethods = {
    meow: function() {
        alert(`I am ${this.name} and i can do meow meow`);
    },
    changeName: function(newName) {
        this.newName = newName;
        return this.newName;
    },
    changeColorOfEyes: function(newColor) {
        this.colorOfEyes = newColor;
        return this.newColor;
    },
    summary: function() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    },
};

function createAnimal(location, numberofLegs) {
    let animal = Object.create(animalMethods);
    animal.locatin = location;
    animal.numberofLegs = numberofLegs;
    return animal;
}

function createDog(location, numberofLegs, name, color){
    let animal = Object.create(dogMethods);
    Object.getPrototypeOf(location, numberofLegs);
    animal.name = name;
    animal.color = color;
    return animal;
}
Object.setPrototypeOf(dogMethods, animalMethods);
function createCat(location, numberofLegs, name, color){
    let animal = Object.create(catMethods);
    Object.getPrototypeOf(location, numberofLegs);
    animal.name = name;
    animal.colorOfEyes = color;
    return animal;
}
Object.setPrototypeOf(catMethods, animalMethods);