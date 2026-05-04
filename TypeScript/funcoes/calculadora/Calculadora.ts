import readline = require("readline-sync");
import { dividir, multiplicar, somar } from "./operacoes/calculos"; //as {} servem para contatenar a importação do arquivo

let resultadoDivisao: number | null;

let numero1 = readline.questionFloat("Digite o primeiro numero: ");
let numero2 = readline.questionFloat("Digite o segundo numero: ");

console.log("O resultado da soma é: " + somar(numero1, numero2));

console.log("O resultado da multiplicacao é: "+ multiplicar(numero1, numero2));

resultadoDivisao = dividir(numero1, numero2);

if(resultadoDivisao !== null) {
    console.log(`O resultado da divisao é: ${resultadoDivisao}`);
}else {
    console.log("Não é possivel dividir por zero.");
}