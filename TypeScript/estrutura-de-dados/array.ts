import readlinesync = require("readline-sync");

const pessoas: string[] = []; // Array de strings iniciado vazio

const alunos: Array<number>=[12,14]; 

const notas = new Array<number>(5); // Array de numeros iniciado com 5 posições

for(let i = 0; i < notas.length ; i++){
    notas[i] = readlinesync.questionFloat("Digite a nota: ");
}

console.table(notas);
/* notas
0 = v
1 = v
2 = v
3 = v
4 = v
*/

