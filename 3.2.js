let tab = [1, 2, 3, 4, 5];
let tab2 = [100, 101, 102];
let sum = 0; let ave = 0;
let sum2 = 0; let ave2 = 0;
for (let i = 0;i < tab.length; i++){
    sum = new Number(sum+tab[i]);
    ave = sum/tab.length;
}
for (let j = 0;j < tab2.length; j++){
    sum2 = new Number(sum2+tab2[j]);
    ave2 = sum2/tab2.length;
}
console.log(ave);
console.log(ave2);