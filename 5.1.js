const readlineSync = require("readline-sync");

let name = new String;
let year = new Number;
let mb = new Array;
let myLibrary = {name: '',year: '',members: []};
let n = 0;

//fonction qui demande à l'utilisateur le nom, l'année de production et les membres de casting
//de la série préférée de l'utilisateur
function askTvSerie(){
    myLibrary.name = readlineSync.question('Please enter the name of your favorite TV serie : ');
    myLibrary.year = readlineSync.question('Please enter the production year of your favorite TV serie : ');
    //appel de la fonction qui génère un tableau de membres du casting
    while (mb != 'stop'){
        mb = readlineSync.question('Please enter the names of the cast members of your favorite TV serie : ');
        myLibrary.members.push(mb);
    }
    myLibrary.members.pop(n-1);
    //retour de la donnée members sous forme de tableau nommé mbCast dans la fonction cast()
    return myLibrary;
}

console.log(askTvSerie());
console.log(myLibrary);
console.log(JSON.stringify(myLibrary));
//console.log(JSON.parse(myLibrary));