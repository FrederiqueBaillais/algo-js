const readlineSync = require("readline-sync");

let nbint = readlineSync.question('Can you give me a first number with decimal please?');
let nbparse = readlineSync.question('Can you give a second number with decimal please?');

console.log(Math.trunc(nbint)*nbparse);