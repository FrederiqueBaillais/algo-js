const readlineSync = require("readline-sync");

for (let nb = 0; nb <= 100; nb += 1){
    let res = nb%2;
    if (res == 0){
        console.log(nb);
    }
}