import leia from 'readline-sync';

let ingresso;
let idade;

ingresso = leia.keyIn("Tem ingresso?");
idade = leia.questionInt("Qual a idade?");

if(ingresso && idade >= 18){
    console.log("Pode entrar");
}
