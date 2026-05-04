import readlinesync = require('readline-sync');
 
const alunos = new Set<string>();
let continuar: boolean = true;
 
const acoes: Record<number, () => void> = {
    1: () => {
        const nomeAluno = readlinesync.question('Digite o nome do aluno: ');
        alunos.add(nomeAluno);
        console.log('Aluno cadastrado com sucesso!');
    },
    2: () => {
        console.log('Alunos cadastrados:');
        alunos.forEach(aluno => console.log(aluno));
    },
    3: () => {
        const nomeRemover = readlinesync.question('Digite o nome do aluno a ser removido: ');
        console.log(alunos.delete(nomeRemover) ? 'Aluno removido!' : 'Não encontrado.');
    },
    4: () => {
        console.log('Encerrando...');
        continuar = false;
    }
};
 
do {
    console.log('\n1-Cadastrar | 2-Listar | 3-Remover | 4-Sair');
    const opcao = readlinesync.questionInt('Escolha uma opcao: ');
 
    if (acoes[opcao]) {
        acoes[opcao]();
    } else {
        console.log('Opcao invalida.');
    }
 
} while (continuar);