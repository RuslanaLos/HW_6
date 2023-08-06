let digit = parseInt(prompt("Введіть будь-яке натуральне число."));
let sum = 0;
for (let i = 1; i <= digit; i++){
    if (digit % i === 0 && i % 2 === 0){
        sum++;
    }
}
console.log("Кількість парних дільників: " +  sum);