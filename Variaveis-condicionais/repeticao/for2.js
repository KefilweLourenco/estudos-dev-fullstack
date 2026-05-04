import leia from 'readline-sync';

let nome, idade;
/*const porque os valores não irão mudar
como é uma lista, já define o valor que vai entrar na lista*/
const lista = [];

/*Array, sempre começa pela posição 0

i = 0
i = 1
i = 2
i = 3
i = 4 
*/

for(let i = 0; i <=5; i++){
    nome = leia.questionInt("Qual o seu nome? ");
    idade = leia.questionInt("Qual a sua idade? ");
    lista.push({nome,idade});
}

console.log(lista);
