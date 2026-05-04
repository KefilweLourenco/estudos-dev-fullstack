import leia from 'readline-sync';

let continuar = false;
//do = primeiro executa
do{

    //execução
    console.log("Joguinho de advinhação! ");
    let numero = leia.questionInt("Digite um número: ");
    //Math.floor = arredonda para baixo para o inteiro mais proximo
   //Math.random =  gera um numero aleatorio decimal entre 0 e 1
    const numeroSecreto =  Math.floor(Math.random() * 10);

    if(numero == numeroSecreto){
        console.log("Acertou! ");
    }else{
        console.log("Errou! ");
    }


    continuar = leia.keyIn("Quer continuar jogando pague R$350? ")

}while(continuar);

