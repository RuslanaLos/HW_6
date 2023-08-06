let digit = parseInt(prompt("Введіть будь-яке натуральне число."));
for (let i = 1; i <= digit; i++) {
    if (digit % i === 0) {
        console.log(i);
    }
}

