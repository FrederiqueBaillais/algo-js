const readlineSync = require("readline-sync");

let name = new String;
let year = new Number;
let mb = new Array;
let n = 0;
let myLibrary = {
    "name": '',
    "year": '',
    "members": []
};

//function that asks the user the name, production year and casting members
//and inserts the userdatas into an object composed of data and tables
function askTvSerie(){
    myLibrary.name = readlineSync.question('Please enter the name of your favorite TV serie : ');
    myLibrary.year = readlineSync.question('Please enter the production year of your favorite TV serie : ');
    //appel de la fonction qui génère un tableau de membres du casting
    while (mb != 'stop'){
        mb = readlineSync.question('Please enter the names of the cast members of your favorite TV serie : ');
        myLibrary.members.push(mb);
    }
    myLibrary.members.pop(n-1);
    return myLibrary;
}

console.log(askTvSerie());
console.log(myLibrary);
console.log(JSON.stringify(myLibrary));