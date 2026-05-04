//Atividade Array-1

import readlineSync = require("readline-sync");

const cores: string[] = [];

for(let i = 0; i < 5; i++){

    let cor = readlineSync.question("Digite uma cor: ");

    cores.push(cor);
}
console.log("\n Listar todas as cores: ");

for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}
cores.sort();

console.log("\n Ordenar as cores: ");

for (let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}
