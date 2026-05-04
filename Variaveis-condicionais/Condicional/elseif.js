import leia from 'readline-sync';

let ingresso;
let idade;

ingresso = leia.keyIn("Tem ingresso?");
idade = leia.questionInt("Qual a idade?");

if(ingresso && idade >= 18){
    console.log("Bem vindo!");
    nome = leia.question("Qual o seu nome?");
    console.log(`Òlá ${nome}`);
}else if(ingresso && idade >=14){
    console.log("Bem vindo!");
}else {
    console.log("Não pode entrar!");
}
