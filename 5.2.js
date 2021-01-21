const readlineSync = require("readline-sync");

let mb = new Array;
let myLibrary = {name: '',year: '',members: []};
let n = 0;
let tabMb = new Array();

//fonction qui demande à l'utilisateur le nom, l'année de production et les membres de casting
//de la série préférée de l'utilisateur
function askTvSerie(){
    myLibrary.name = readlineSync.question('Please enter the name of your favorite TV serie : ');
    myLibrary.year = readlineSync.question('Please enter the production year of your favorite TV serie : ');
    while (mb != 'stop'){
        mb = readlineSync.question('Please enter the names of the cast members of your favorite TV serie : ');
        myLibrary.members.push(mb);
    }
    //permet de supprimer l'entrée stop qui a permis de sortir du programme
    myLibrary.members.pop(n-1);
    //affiche le contenu de myLibrary
    return myLibrary;
}

//fonction qui mélange les entrées des membres et les renvoie dans le désordre
//dans un nouveau tableau
function randomizeCast(truc){
    for (let i = 0;i < myLibrary.members.length; i++) {
        tempo = Math.floor(Math.random()*myLibrary.members.length);
        tabMb.push(truc[tempo]);

        temp = myLibrary.members[i];
        tabMb[tempo] = myLibrary.members[i];
        tabMb[tempo] = temp;
        }
return tabMb;
}

console.log(askTvSerie());
console.log(randomizeCast(myLibrary.members));

//reste à faire en sorte que le random ne répète pas plusieurs
//fois la même information