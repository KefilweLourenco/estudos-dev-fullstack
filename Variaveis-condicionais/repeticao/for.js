import leia from 'readline-sync';

let numero = leia.questionInt("Digite um número: ");

/*criação de uma tabuada
Ideal quando o número de iterações é conhecido antecipadamente.*/
for(let contador  = 1; contador <= 10; contador++){
    console.log(`${numero} x ${contador} = ${contador * numero}`);
}

//for = para lista determinada