let tab = [1, 2, 3, 4, 5];
let tab2 = [100, 101, 102];
let sum = 0;
let sum2 = 0;
for (let i = 0;i < tab.length; i++){
    sum = new Number(sum+tab[i]);
}
for (let j = 0;j < tab2.length; j++){
    sum2 = new Number(sum2+tab2[j]);
}
console.log(sum);
console.log(sum2);