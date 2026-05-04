import leia from 'readline-sync';

let numero1;
let numero2;
let operador;

numero1 = leia.questionInt("Digite o primeiro numero: ");
operador = leia.question("Digite o operador: ");
numero2 = leia.questionInt("Digite o segundo numero: ");

switch (operador) {
    case "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;

    case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;

    case "*":
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;

    case "/":
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    default:
        console.log("Operador invalido");
        break;

}