const readlineSync = require("readline-sync");

let name = readlineSync.question('Question 1/4 : What\'s your firstname?');
let place = readlineSync.question('Question 2/4 : Can you choose a place to be?');
let time = readlineSync.question('Question 3/4 : Can you give me a time in minutes?');
let object = readlineSync.question('Question 4/4 Can you give me an object?');

console.log('Once upon a time, three little pigs who met '+name+' in '+place+'. They chatted for '+time+' minutes and left '+name+' alone with '+object+' in his/her hand.');