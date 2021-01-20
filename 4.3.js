/* si j'ai un nombre n, demandé à l'utilisateur par la console,
je dois renvoyer un tableau de n nombres, nombres pris aléatoirement.
ce qui signifie que chaque fois que le random renvoie un nombre,
je dois le stocker dans le tableau à la dernière place */
const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Please enter a number : '));

//returns a random integer between 1 and 10
function rand10(){
    return 1 + Math.floor(Math.random() * 10);
}

// returns every number created by random from 1 to 10 in a table "randTab"
function multiRand(n){
    let finalTab = new Array;
    //boucle pour insérer les rand dans le tableau
    for (let j = 0;j < n;j++){
        temp = rand10();
        finalTab.push(temp);
    }
    return finalTab;
}
console.log(multiRand(n));