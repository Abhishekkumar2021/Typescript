function greet(name: string | null) {
    if (name === null) {
        console.log("Hello, nobody!");
    } else {
        console.log(`Hello, ${name.toUpperCase()}!`);
    }
}