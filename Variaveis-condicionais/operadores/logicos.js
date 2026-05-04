let x = 10; 
let y = 5;
let proposicao1;
let proposicao2;
let proposicao3;
let proposicao4;
let resposta; 

proposicao1 = x > 5;
console.log(`\n proposição1 é: ${proposicao1}`);

proposicao2 = x < y;
console.log(`\n proposição2 é: ${proposicao2}`);

proposicao3 = x != y;
console.log(`\n proposição3 é: ${proposicao3}`);

proposicao4 = x == y;
console.log(`\n proposição4 é: ${proposicao4}`);

console.log("\n Conjunção");

resposta = proposicao1 && proposicao2;
console.log("\n A proposição 1 && proposição 2 é: " + resposta);


