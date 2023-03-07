"use strict";
const marks = [1, 2, 3, 4, 5];
const marks2 = [1, 2, 3, 4, 5];
function printArray(arr) {
    arr.forEach((item) => console.log(item));
}
printArray(marks);
const getData = (data) => {
    return data;
};
class Seller {
    constructor(name, age, product) {
        this.name = name;
        this.age = age;
        this.product = product;
    }
}
const seller = new Seller("John", 30, "Apple");
const seller2 = new Seller("John", 30, ["Apple", "Banana"]);
