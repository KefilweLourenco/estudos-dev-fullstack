const leia = require('readline-sync');
let salario;
let abono;
let resultado; 

salario = leia.questionInt("Digite o Salário: ");
abono = leia.questionInt("Digite o Abono: ");

resultado = salario + abono;

console.log(`Novo Salário:  ${resultado}`);





