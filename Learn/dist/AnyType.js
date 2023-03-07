"use strict";
// This is a file that is used to learn about any type in typescript
/*
    Any type is a type that can be assigned to any type of variable, it is bit dangerous to use it
    as it can cause errors in the code, but it is used in some cases where we are not sure about
    the type of the variable.

    It is used when we are not sure about the type of the variable, and we want to assign it to
    any type of variable.

    It is used when we are using a library that is not written in typescript, and we are not sure
    about the type of the variable.

*/
// Example 1
let a = 10;
a = "Hello";
a = true;
// Example 2
let b;
b = 10;
b = "Hello";
b = true;
// Example 3
let c;
c = 10;
c = "Hello";
c = true;
c = function () {
    console.log("Hello");
};
// Example 4
let d;
d = 10;
// Example 5
let e;
e = 10;
e = "Hello";
e = true;
e = function () {
    console.log("Hello");
};
e = {
    name: "Hello",
    age: 10
};
// Example 6
let f;
f = 10;
f = "Hello";
f = true;
f = function () {
    console.log("Hello");
};
f = {
    name: "Hello",
    age: 10
};
f = [1, 2, 3, 4, 5];
