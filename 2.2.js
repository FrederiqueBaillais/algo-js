const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question('Please enter a minimum number without decimal : '));
let max = new Number(readlineSync.question('Please enter a maximum number without decimal : '));

if (min < max){
    let current = new Number(readlineSync.question('Please enter a number between the 2 others : '));
    if ((current < max) && (current > min)) {
        console.log (current+' se situe entre '+min+' et '+max);
    }
    else if ((current > max) || (current < min)) {
        console.log(current+' n\'est pas entre '+min+' et '+max);
    }
}
if (max < min){
    console.log ('Sorry, you don\'t understood anything. Good bye !');
}