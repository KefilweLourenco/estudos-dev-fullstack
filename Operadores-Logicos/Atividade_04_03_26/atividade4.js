//Lista 04 - Exercício-7
import leia from 'readline-sync';

let vetor =[2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("Digite o número que você deseja encontrar: ");
let encontrado = false;

for (let i = 0; i < vetor.length; i++){
    if (vetor[i] === numero){
        console.log(`O número ${numero} está localizado na posição: ${i}`);
        encontrado = true;
        break;
    }
}
if (!encontrado){
    console.log(`O número ${numero} não foi encontrado!`);

}