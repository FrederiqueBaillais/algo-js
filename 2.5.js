const readlineSync = require("readline-sync");

let nb = new Number(readlineSync.question('Please enter your favorite number : '));

while (nb != 42){
    console.log('Are you sure ?'+nb);
    nb = new Number(readlineSync.question('Please enter another number : '));
}