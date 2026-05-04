import readlinesync = require("readline-sync");

while(true){
    
let opcao: number = readlinesync.questionInt("Digite a opcao desejada: ");

    try{/*monitora o codigo*/
        if(opcao !== 1 && opcao !== 2){
            throw new Error("Opcao invalida");
    }

        console.log("Opcao escolhida: " + opcao);

    }catch/*mostra a mensagem */ (error: any){

        console.log(error.message); //O "error.message" dispara a mensagem de erro
    
    }

}


