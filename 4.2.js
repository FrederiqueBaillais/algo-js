//returns a random integer between 1 and 10
function rand10(min,max){
    rand = Math.floor(Math.random() * 10);
    return rand;
}

console.log(rand10(1,11));