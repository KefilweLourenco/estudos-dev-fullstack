const leia = require('readline-sync');

let salarioBruto = 2000.00;
let adicionalNoturno = 500.00;
let horasExtras = 100.00;
let descontos = 200.00;
let salarioLiquido;

salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos);

salarioBruto = leia.questionInt("Salário Bruto: ");

adicionalNoturno = leia.questionInt("Adicional Noturno: ");

horasExtras = leia.questionInt("Horas Extras: ");

descontos = leia.questionInt("Descontos: ");

console.log(`Salário Líquido: ${salarioLiquido}`);
