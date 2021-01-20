const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Please enter a number : '));
let sumTab = 0;
let finalTab = new Array;

//returns a random integer between 1 and 10
function rand10(){
    return 1 + Math.floor(Math.random() * 10);
}

// returns every number created by random from 1 to 10 in a table "randTab"
function multiRand(n){
        //boucle pour insérer les rand dans le tableau
    for (let j = 0;j < n;j++){
        temp = rand10();
        finalTab.push(temp);
    }
    return finalTab;
}
console.log(multiRand(n));

// returns the average of numbers entered in the random array
function average(n) {
    for (let k = 0;k < finalTab.length; k++){
        sumTab = new Number(sumTab+finalTab[k]);
        aveTab = sumTab/finalTab.length;
    }
    return aveTab;
}
console.log(average(finalTab));

// returns the minimum number of the random array
function min(n) {
    mini = Math.min.apply(null,finalTab);
    return mini;
}
console.log('min : '+min(finalTab));

// returns the maximum number of the random array
function max(n) {
    maxi = Math.max.apply(null,finalTab);
    return maxi;
}
console.log('max : '+max(finalTab));