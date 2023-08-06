let num = "";
for (let i = 10; i <= 20; i++){
    if (i !== 20) {
        num += `${i}, `;
    } else{
        num += `${i}.`;
    }
}
console.log(num);
