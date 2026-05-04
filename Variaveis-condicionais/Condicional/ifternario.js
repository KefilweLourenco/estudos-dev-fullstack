import leia from 'readline-sync';

let nota1, nota2, media;

nota1 = leia.questionInt("Digite a primeira nota: ");
nota2 = leia.questionInt("Digite a segunda nota: ");

media = (nota1 + nota2) / 2;

console.log((media >= 7) ? "Aprovado" : "Reprovado");