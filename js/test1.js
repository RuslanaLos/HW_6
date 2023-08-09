let end = 20;
let num = "";
for (let i = 10; i <= end; i++){
    if (i !== end) {
        num += `${i}, `;
    } else{
        num += `${i}.`;
    }
}
console.log(num);
