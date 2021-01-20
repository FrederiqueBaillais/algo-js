const readlineSync = require("readline-sync");

let nb = new Number(readlineSync.question('Please enter a number to calculate the factorial : '));

// returns the factorial of a number chosen by the user
function factorial(a){
    if (a == 0){
        return 1;
    }
    return a*factorial(a-1);
}
console.log(factorial(nb));