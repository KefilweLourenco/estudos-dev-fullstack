//Lista 01 - Exercício-1 

import leia from 'readline-sync';

let A;
let B;
let C;
let soma;

A = leia.questionInt("Digite o número A: ");
B = leia.questionInt("Digite o número B: ");
C = leia.questionInt("Digite o número C: ");

soma = A + B;

if (soma > C){
    console.log("A soma de A + B é maior do que C");

}else if (soma < C){
    console.log("A soma de A + B é menor do que C");
} else {
    console.log("A soma de A + B é igual a C")
}