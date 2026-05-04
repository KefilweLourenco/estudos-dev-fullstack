import readlinesync = require("readline-sync");
import { Animal } from "./src/model/Animal";
import { Mamifero } from "./src/model/Mamifero";
import { Ave } from "./src/model/Ave";
import { AnimalController } from "./src/controller/AnimalController";
 
export function main() {
   
    //vamos criar um objeto da controller pra ter acesso aos métodos:
    let animalController = new AnimalController();
 
    let continuar: boolean = true;
    let opcao: number;
 
    do{
 
        console.log("\nMENU: \n1 - Cadastrar Animal \n2 - Listar Animais\n3 - Atualizar");
        opcao = readlinesync.questionInt("Digite a opcao desejada: ");
 
        switch(opcao){
            case 1:
                console.log("Cadastre o Animal");
                console.log("\n1 - Mamifero \n2- Ave");
                let opcaoAnimal = readlinesync.questionInt("Digite a opcao desejada: ");
                let animal: Animal;
 
                animal = opcaoAnimal == 1 ? new Mamifero() : new Ave();
 
                animal.id = readlinesync.questionInt("Digite o id do animal: ");
                animal.nome = readlinesync.question("Digite o nome do animal: ");
                animal.idade = readlinesync.questionInt("Digite a idade do animal: ");                
                animal.especie = readlinesync.question("Digite a especie do animal: ");                
                animal.cor = readlinesync.question("Digite a cor do animal: ");
               
                if(animal instanceof Mamifero){
                    animal.dente = readlinesync.question("Digite o dente do animal:");
                    animal.alimentar();
                }
                if(animal instanceof Ave){
                    animal.voo = readlinesync.keyInYNStrict("O animal voa? ");
                    animal.alimentar();
                }
 
                animalController.cadastrarAnimal(animal); //aqui estamos chamando o método cadastrarAnimal que tá lá dentro
                // da controller, ele vai salvar lá dentro!!!
                 
            break;
            case 2:
 
            animalController.listarAnimais();
           
            break;
            case 3:
                try{
                console.log("\nAtualizar o Animal");
                console.log("\n1 - Mamifero \n2- Ave");
                let opcaoAnimal2 = readlinesync.questionInt("\nDigite a opcao desejada: ");
                let animal2: Animal;
 
                animal2 = opcaoAnimal2 == 1 ? new Mamifero() : new Ave();
 
                animal2.id = readlinesync.questionInt("Digite o id do animal cadastrado: ");
                animal2.nome = readlinesync.question("Digite o nome do animal: ");
                animal2.idade = readlinesync.questionInt("Digite a idade do animal: ");                
                animal2.especie = readlinesync.question("Digite a especie do animal: ");                
                animal2.cor = readlinesync.question("Digite a cor do animal: ");
               
                if(animal2 instanceof Mamifero){
                    animal2.dente = readlinesync.question("Digite o dente do animal:");
                    animal2.alimentar();
                }
                if(animal2 instanceof Ave){
                    animal2.voo = readlinesync.keyInYNStrict("O animal voa? ");
                    animal2.alimentar();
                }
 
                animalController.atualizarAnimal(animal2);
                }catch(error){
                    console.log(error);
                }
 
 
            break;
            case 4:
                animalController.removerAnimal(readlinesync.questionInt("Digite o id do animal a ser removido: "));

 
        }
 
        continuar = readlinesync.keyInYNStrict("\n Deseja voltar para o menu? ");
 
    }while(continuar)
}
 
main();