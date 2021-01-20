/*
//2. **Distance between two points**. Create a 
//function that calculate the distance between two points 
//(every point have two coordinates: x, y). _HINT: Your function 
//Should receive four parameters_.
*/


const readlineSync = require("readline-sync");

let xA = new Number(readlineSync.question('Please enter a coordinate x for the point A : '));
let yA = new Number(readlineSync.question('Please enter a coordinate y for the point A : '));
let xB = new Number(readlineSync.question('Please enter a coordinate x for the point B : '));
let yB = new Number(readlineSync.question('Please enter a coordinate y for the point B : '));

function calcDistance (xA, yA, xB, yB){
    this.xA = xA;
    this.yA = yA;
    this.xB = xB;
    this.yB = yB;

    let distance = Math.sqrt((Math.pow(this.xB-this.xA,2))+(Math.pow(this.yB-this.yA,2)));
    return distance;

}
console.log(calcDistance(xA, yA, xB, yB));
