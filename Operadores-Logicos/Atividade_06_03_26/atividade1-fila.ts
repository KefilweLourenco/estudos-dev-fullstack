import readlinesync from 'readline-sync';
import { Queue } from "./Queue";

const fila = new Queue<string>();

let opcao: number

do {
    console.log("*************************************")
    console.log(" ")
    console.log(" 1 - Adicionar Cliente na Fila ")
    console.log(" 2 - Listar tosos os Clientes ")
    console.log(" 3 - Retirar Cliente da Fila ")
    console.log(" 0 - Sair ")
    console.log(" ")
    console.log("*************************************")
    
 opcao = readlinesync.questionInt("\nEntre com a opção desejada: ")
 
 switch(opcao){
    case 1:
        const nome = readlinesync.question("\nDigite o nome do cliente: ")
        
        fila.enqueue(nome)
        console.log("\nFila:")
        
        fila.printQueue()
        console.log("\nCliente Adicionado! ")
        break;

    case 2:
        if(fila.isEmpty()){
            console.log("\nA fila está vazia! ")

        
        }else {
            console.log("\nLista de Clientes na Fila: ")

            fila.printQueue()
        }
        break;
    
    case 3:
        if(fila.isEmpty()){
            console.log("\nA fila está vazia! ")
        }else {
            fila.dequeue()
            console.log("\nFila: ")

            fila.printQueue()
            console.log("\nO cliente foi chamado! ")
        }
        break

        case 0:
            console.log("\nPrograma Finalizado! ")
            break;
            
            default:
                console.log("\nOpção Inválida! ")

    }        

}while(opcao !== 0)