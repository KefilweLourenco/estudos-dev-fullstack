//Lista 01 - Exercício-1

import leia from 'readline-sync';

let primeiro = leia.questionInt("Digite o primeiro número do intervalo: ");
let ultimo = leia.questionInt("Digite o último número do intervalo: ");

if (primeiro >= ultimo){
    console.log("Intervalo inválido!");
}else {

    console.log(`No inervalo entre ${primeiro} e ${ultimo}:`);

    for (let i = primeiro; i <= ultimo; i++){

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
        }
    }
}
