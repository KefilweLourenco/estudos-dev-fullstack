const leia = require('readline-sync');

let numero1;
let numero2;
let numero3;
let numero4;
let diferença;


numero1 = leia.questionInt("Numero 1:");
numero2 = leia.questionInt("Numero 2:");
numero3 = leia.questionInt("Número 3:");
numero4 = leia.questionInt("Numero 4:");

diferença = ((numero1 * numero2) - (numero3 * numero4));

console.log(`Diferença: ${diferença}`);

