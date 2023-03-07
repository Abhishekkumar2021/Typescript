class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


class Student extends Person {
    constructor(
        public name: string,
        public age: number,
        public id: number
    ){
        super(name, age);
    }
}