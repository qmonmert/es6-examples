"use strict";

class Person {
    constructor(name) {
        this.name = name;
        this._age = 0;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    whoIAm() {
        console.log(`Hello I'm ` + this.name + ` (` + this._age + `)`);
    }
}

let bob = new Person("Bob");
bob.age = 27;
bob.whoIAm(); // Hello I'm Bob (27)