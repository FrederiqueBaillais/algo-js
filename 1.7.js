const readlineSync = require("readline-sync");

let shoe = readlineSync.question('Can you give me your shoe size please?');
let year = readlineSync.question('Can you give your birth year please?');

let temp = shoe*2;
temp = temp+5;
temp = temp*50;
temp = temp-year;
temp = temp+1766;

console.log(temp);