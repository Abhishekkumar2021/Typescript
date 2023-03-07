"use strict";
function greet(name) {
    if (name === null) {
        console.log("Hello, nobody!");
    }
    else {
        console.log(`Hello, ${name.toUpperCase()}!`);
    }
}
