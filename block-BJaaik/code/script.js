class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age= age;
        this.gender = gender;
    }
    eat() {
        console.log(`${this.name} can eat`);
    }
    sleep() {
        console.log(`${this.name} can sleep`);
    }
    walk() {
        console.log(`${this.name} can walk`)
    }
}

class Player extends Person {
    constructor(name, age, gender, institueName) {
        super(name, age, gender);
        this.institueName = institueName;
    }
    teach() {
        console.log(`${this.institueName} can teach`);
    }
}

class Artist extends Person {
    constructor(name, age, gender, kind) {
        super(name, age, gender);
        this.kind = kind;
    }
    createArt() {
        console.log(`${this.name} is artist`);
    }
}

class Cricketer extends Person {
    constructor(name, age, gender, sportsName, teamName) {
        super(name, age, gender);
        this.sportsName = sportsName;
        this.teach = teamName;
    }
    playCricket() {
        console.log(`${this.name} can play cricket`);
    }
}