import leia from 'readline-sync';

const senhaCorreta = "1234";
let senhaDigitada = "";
let contador = 0;

/*O WHILE é indicado quando não sabemos previamente o valor final da condição 
(quantas vezes a repetição será executada). 
A repetição continua enquanto a condição definida for avaliada como verdadeira.*/

while (senhaDigitada !== senhaCorreta){
    senhaDigitada = leia.question("Digite a senha: ");
    //tentativas de vezes que user tem, até forçar a parada das tentativas.
    if(contador === 3){
        console.log("Acabou as tentativas! Acesso negado!");
        //interrompe o looping: break;
        break;
    }
}

console.log("Acesso liberado");
