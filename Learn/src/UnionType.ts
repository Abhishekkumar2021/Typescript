function convert(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return value.toFixed(2);
    }
}

convert("hello"); // HELLO
convert(123); // 123.00