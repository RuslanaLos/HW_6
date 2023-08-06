let digit = parseInt(prompt("Введіть будь-яке натуральне число."));
let sum = 0;
for (let i = 1; i <= digit; i++){
    if (digit % i === 0 && i % 2 === 0){
        sum += i;
    }
}
console.log(sum);


/*
якщо 9-11 завдання робити як одне, то вирішення буде наступне

let digit = parseInt(prompt("Введіть будь-яке натуральне число."));
let sum = 0;
let amount = 0;
for (let i = 1; i <= digit; i++) {
    if (digit % i === 0) {
        console.log(i);
    } if (digit % i === 0 && i % 2 === 0){
        sum++;
        amount += i;
    }
}
console.log("Кількість парних дільників: " +  sum);
console.log(amount);*/
