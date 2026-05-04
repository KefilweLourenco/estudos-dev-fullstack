//Lista 02 - Exercício-5

import leia from 'readline-sync';

let codigo;
let quantidade;

codigo = leia.questionInt("Digite o código do produto: ");
quantidade = leia.questionInt("Digite a quantidade: ");

switch (codigo) {

    case 1:

        console.log("Produto: Cachorro Quente");
        console.log(`Valor total: R$ ${(quantidade * 10).toFixed(2)}`);
        break;

    case 2:
        console.log("Produto: X-Salada");
        console.log(`Valor total: R$ ${(quantidade * 15).toFixed(2)}`);
        break;

    case 3:
        console.log("Produto: X-Bacon");
        console.log(`Valor total: R$ ${(quantidade * 18).toFixed(2)}`);
        break;

    case 4:
        console.log("Produto: Bauru");
        console.log(`Valor total: R$ ${(quantidade * 12).toFixed(2)}`);
        break;

    case 5:
        console.log("Produto: Refrigerante");
        console.log(`Valor total: R$ ${(quantidade * 8).toFixed(2)}`);
        break;

    case 6:
        console.log("Produto: Suco de Laranja");
        console.log(`Valor total: R$ ${(quantidade * 13).toFixed(2)}`);
        break;

    default:
        console.log("Código inválido");
        break;
}