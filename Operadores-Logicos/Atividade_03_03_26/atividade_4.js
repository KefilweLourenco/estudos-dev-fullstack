//Lista 02 - Exercício-6
/*Enuciado mostra a saída do salário do gerente com reajuste de 110000.00
mas como são 10% o correto seria 11000.00.
*/

import leia from 'readline-sync';

let nome;
let codigo;
let salario;
let novoSalario;

nome = leia.question("Digite o nome do colaborador: ");
codigo = leia.questionInt("Digite o código do cargo (1 a 6): ");
salario = leia.questionFloat("Digite o salário: ");

switch (codigo) {

    case 1:
        novoSalario = salario + (salario * 0.10);
        console.log("Nome do colaborador:", nome);
        console.log("Cargo: Gerente");
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;

    case 2:
        novoSalario = salario + (salario * 0.07);
        console.log("Nome do colaborador:", nome);
        console.log("Cargo: Vendedor");
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;

    case 3:
        novoSalario = salario + (salario * 0.09);
        console.log("Nome do colaborador:", nome);
        console.log("Cargo: Supervisor");
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;

    case 4:
        novoSalario = salario + (salario * 0.06);
        console.log("Nome do colaborador:", name);
        console.log("Cargo: Motorista");
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;

    case 5:
        novoSalario = salario + (salario * 0.05);
        console.log("Nome do colaborador:", nome);
        console.log("Cargo: Estoquista");
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;

    case 6:
        novoSalario = salario + (salario * 0.08);
        console.log("Nome do colaborador:", nome);
        console.log("Cargo: Técnico de TI");
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;

    default:
        console.log("Código inválido.");
        break;
}