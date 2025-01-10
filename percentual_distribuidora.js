const faturamento = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    outros: 19849.53,
};

let totalMensal = 0;

Object.keys(faturamento).forEach((key) => {
    totalMensal += faturamento[key];
});

Object.keys(faturamento).forEach((key) => {
    let percentualFaturamento = (faturamento[key] / totalMensal) * 100;

    console.log(`O estado: ${key} faturou ${percentualFaturamento}%`);
});
