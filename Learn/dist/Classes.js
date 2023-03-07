"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, id) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.id = id;
    }
}
