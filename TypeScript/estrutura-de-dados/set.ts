import readlinesync = require("readline-sync");

//criação da nossa colection/lista

const alunos = new Set<string>();
//nossa variavel 
let continuar: boolean;
let opcao: number = 0;

do{
    console.log("1 - Adicionar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Remover aluno");
    console.log("4 - Limpar lista de alunos");

    opcao = readlinesync.questionInt("Escolha uma opção: ");

    switch(opcao){
        case 1:
            alunos.add(readlinesync.question("Digite o nome do aluno: "));
            break;
            case 2:
                console.table(alunos);
                break;
                case 3:
                    alunos.delete(readlinesync.question("Digite o nome do aluno: "));
                    break;
                case 4:
                    alunos.clear();
                    break;
                default:
                    console.log("Opção inválida");
                    break;
    }

    continuar = readlinesync.keyInYNStrict("Deseja continuar? ")


}while(continuar);
