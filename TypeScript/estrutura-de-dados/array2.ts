import readlinesync = require("readline-sync");

const notas: Array<number> = [5,6,7,9,4,3,1]

for(let nota of notas){ // pecorre o array conforme o tamanho da lista
    console.log(nota)
} 

console.log(notas); 

notas.push(10); // adiciona um item ao final de array

console.log(notas); 

notas.pop(); // remove o ultimo da lista de array

console.log(notas); 

notas.sort(); // ordena o array

