import leia from 'readline-sync'

let continuar = false;

continuar = leia.keyIn("Quer acessar a tabuada? ");

/*O WHILE é indicado quando não sabemos previamente o valor final da condição 
(quantas vezes a repetição será executada). 
A repetição continua enquanto a condição definida for avaliada como verdadeira.*/
/* Laço de repetição que eu tenho controle*/
while(continuar){

    let numero = leia.questionInt("Digite um número: ");

    for(let contador = 1; contador <=10; contador++){
        console.log(`${numero} x ${contador} = ${contador * numero}`);
    }

    continuar = leia.keyIn("Quer continuar usando a tabuada? ");
} 

//while = é aquele que precisa de validação (controla)