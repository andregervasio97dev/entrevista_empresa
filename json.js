const data = require("./faturamento.json");

let maiorFaturamento = -1;
let menorFaturamento = Math.max;
let totalFaturamento = 0;
let numDays = 0;

Object.keys(data).forEach((key) => {
    Object.keys(key).forEach((index) => {
        valor = key[index].total;
        if (valor > maiorFaturamento) {
            maiorFaturamento = valor;
        }
        if (valor < menorFaturamento) {
            menorFaturamento = valor;
        }
        totalFaturamento += valor;
        numDays++;
    });
});

Object.keys(data).forEach((key) => {
    Object.keys(key).forEach((index) => {
        valor = key[index].total;
        if (valor > totalFaturamento / numDays) {
            console.log("maior que a media");
        }
    });
});
