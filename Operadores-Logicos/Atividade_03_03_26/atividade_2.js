//Lista 01 - Exercício-2

import leia from 'readline-sync';

let numero = leia.questionInt("Digite um número: ");

let resultado = "";


if (numero % 2 === 0) {
  resultado += "par";
} else {
  resultado += "ímpar";
}

if (numero > 0) {
  resultado += " e positivo!";
} else if (numero < 0) {
  resultado += " e negativo!";
} else {
  resultado += " e zero!";
}

console.log(`O número ${numero} é ${resultado}`);
