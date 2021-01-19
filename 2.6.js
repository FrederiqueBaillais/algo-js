const readlineSync = require("readline-sync");

let numeroJour = new Number(readlineSync.question('Please enter a number between 1 and 7 : '));

if (numeroJour == 1) {
    console.log('Lundi')
}
else if (numeroJour == 2) {
    console.log('Mardi')
}
else if (numeroJour == 3) {
    console.log('Mercredi')
}
else if (numeroJour == 4) {
    console.log('Jeudi')
}
else if (numeroJour == 5) {
    console.log('Vendredi')
}
else if (numeroJour == 6) {
    console.log('Samedi')
}
else if (numeroJour == 7) {
    console.log('Dimanche')
}
