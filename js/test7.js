let start = 30;
let end = 80;
let sum = 0;

for (start; start <= end; start++){
    if (start % 2 === 0){
        sum += start;
    }
}
console.log(sum);