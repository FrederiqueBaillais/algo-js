const readlineSync = require("readline-sync");

let nb1 = readlineSync.question('Can you give me a first number without decimal please?');
let nb2 = readlineSync.question('Can you give a second number without decimal please?');

console.log(nb1%nb2);