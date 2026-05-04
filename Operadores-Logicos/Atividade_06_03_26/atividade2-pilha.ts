import readlinesync from 'readline-sync';
import { Stack } from "./Stack";

const pilha = new Stack<string>();

let opcao: number;

do{
    console.log("\n************************************")
    console.log(" ")
    console.log(" 1 - Adicionar Livro na Pilha ")
    console.log(" 2 - Listar todos os Livros ")
    console.log(" 3 - Retirar Livro da pilha ")
    console.log(" 0 - Sair ")
    console.log(" ")
    console.log("**************************************")

    opcao = readlinesync.questionInt("\nEntre com a opcao desejada: ");

    switch(opcao){
        case 1: 
        const nome = readlinesync.question("\nDigite o nome do livro: ");
        
        pilha.push(nome);

        console.log("\nPilha: ");
        pilha.printStack();

        console.log("\nLivreo adicionado! ");
        break;

        case 2:
            if(pilha.isEmpty()){
                console.log("\nA pilha está vazia! ");

            }else {
                console.log("\nListra de Livros na Pilha: ");
                pilha.printStack();
            }
            break;
        
        case 3:
            if(pilha.isEmpty()){
                console.log("\nA Pilha está vazia! ");
            
            } else {
                
                pilha.pop();

                console.log("\nPilha: ");
                pilha.printStack();

                console.log("\nUm Livro foi retirado da pilha! ");
            }
            break;

            case 0:
                console.log("\nPrograma Finalizado! ");

                break;

                default:
                    console.log("\nOpção Inválida! ");
    }
}while(opcao !==0);

