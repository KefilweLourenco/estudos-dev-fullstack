const leia = require('readline-sync');

let nota1 = 10.0;
let nota2 = 8.0;
let nota3 = 7.0;
let nota4 = 7.5;
let media;

media = ((nota1 + nota2 + nota3 + nota4)/4);

nota1 = leia.questionInt("Digite nota 1: ");

nota2 = leia.questionInt("Digite nota 2: ");

nota3 = leia.questionInt("Digite nota 3: ");

nota4 = leia.questionInt("Digite nota 4: ");

console.log(`Média final: ${media}`);



