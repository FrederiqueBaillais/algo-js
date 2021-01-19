const readlineSync = require("readline-sync");

let len = new Number(readlineSync.question('Please enter the lenght of a rectangle : '));
let wid = new Number(readlineSync.question('Please enter the width of a rectangle : '));
calcSurface(len,wid);

// with lenght and width of a rectangle given by the user, returns its surface
function calcSurface(length,width) {
    let surface = length*width;
    console.log('La surface de votre rectangle est de '+surface);
}