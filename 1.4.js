const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you give me your name please?');
let firstName = readlineSync.question('Can you give me your firstname please?');
let city = readlineSync.question('Where are you living please?');
console.log('Hello '+firstName+' '+name+' ! '+'You live in '+city+'.');