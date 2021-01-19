const readlineSync = require("readline-sync");

let age = readlineSync.question('Please enter your age : ');

if (age<18){
    console.log('You are not yet an adult');
} else if (age>=18){
    console.log('You are an adult');
}