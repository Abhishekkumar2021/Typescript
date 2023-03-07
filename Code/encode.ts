/*
We have to encode the given string as per the following mapping:
A <-> Z
B <-> Y
C <-> X
D <-> W
... and so on

and for all other characters, we have to keep them as it is.
*/

function encode(str: string): string {
    let encodedString = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            const newCode = 90 - (charCode - 65);
            encodedString += String.fromCharCode(newCode);
        } else {
            encodedString += str[i];
        }
    }
    return encodedString;
}

function generateSampleInput() : string {
    const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let input : string = '';
    for (let i = 0; i < 100; i++) {
        input += allChars[Math.floor(Math.random() * allChars.length)];
    }
    return input;
}

function main() {
    const input = generateSampleInput();
    console.log('Input: ', input);
    console.log('Encoded: ', encode(input));
}

for (let i = 0; i < 10; i++) {
    main();
}