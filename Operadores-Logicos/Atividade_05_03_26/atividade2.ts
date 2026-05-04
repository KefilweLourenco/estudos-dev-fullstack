// Atividade Set-3
import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>();

for(let i = 0; i < 10; i++){
    let numero = readlinesync.questionInt("Digite um número inteiro: ");

    numeros.add(numero);
}
console.log("\n Listar dados do Set: ");

for(let numero of numeros){
    console.log(numero);
}