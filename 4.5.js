const readlineSync = require("readline-sync");

let xA = new Number(readlineSync.question('Please enter a coordinate x for the point A : '));
let yA = new Number(readlineSync.question('Please enter a coordinate y for the point A : '));
let xB = new Number(readlineSync.question('Please enter a coordinate x for the point B : '));
let yB = new Number(readlineSync.question('Please enter a coordinate y for the point B : '));

//calculate the distance between two points (x,y)
//AB²=AC²+BC²
function calcDistance (xA, yA, xB, yB){
    this.xA = xA;
    this.yA = yA;
    this.xB = xB;
    this.yB = yB;

    let distance = Math.sqrt((Math.pow(this.xB-this.xA,2))+(Math.pow(this.yB-this.yA,2)));
    return distance;
}
console.log(calcDistance(xA, yA, xB, yB));