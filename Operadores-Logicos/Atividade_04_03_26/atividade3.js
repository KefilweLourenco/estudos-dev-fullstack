// Lista 03 - Exercício-5

import leia from 'readline-sync'

let soma = 0;
let numero;

do{
    numero = leia.questionInt("Digite um número: ");
    if (numero > 0) {
        soma = soma + numero;
    }
}while (numero != 0);

console.log(`A soma dos números positivos é: ${soma}`);
