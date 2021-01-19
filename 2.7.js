const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Please enter a number : '));
let sum = 0;
for (let i = 1;i <= n;i += 1){
    let m = new Number(readlineSync.question('Please enter a number to get the sum : '));
    sum = new Number(sum + m);
}
console.log('The sum is '+sum);