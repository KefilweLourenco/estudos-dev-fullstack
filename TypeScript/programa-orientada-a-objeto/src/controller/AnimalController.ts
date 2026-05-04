import { Animal } from "../model/Animal";
import { AnimalRepository } from "../repository/AnimalRepository";
 
export class AnimalController implements AnimalRepository {
    //CRUD de Animal (aqui vamos implementar os métodos de CRUD de animal)
    //dentro da controller eu vou simular o banco de dados
 
    private listaAnimal = new Array<Animal>();//listaAnimal vai ser o nome do nosso banco de dados (banco de dados entre muitas regras)
 
    cadastrarAnimal(animal: Animal): void{
        this.listaAnimal.push(animal); //aqui vou salvando na lista o "animal" que foi digitado lá no menu
    }
 
    listarAnimais(): void{
        for (let animal of this.listaAnimal){
        animal.visualizar();
        }
 
    }
 
    atualizarAnimal(animal: Animal): void {
        let cont: number = 0; //variavel que vai contar as posições da nossa lista
        for (let indice of this.listaAnimal){ //aqui vai percorrer indice por indice do array e vai verificar se
        // aquele indice é igual ao animal daquela posição, a meta é encontrar onde determinado animal está na lista
            if(indice.id == animal.id){
                this.listaAnimal[cont] = animal; //vai guardar o animal na posição do contador
            }
            cont++; //contador vai acompanhando a posição do indice
        }
    }
 
    removerAnimal(id: number): void {
/*monitora a sua lógica*/try{
        let cont: number = 0;
        let encontrado: boolean = false;

        for(let animal of this.listaAnimal){
            if(animal.id == id){
                this.listaAnimal.splice(cont);
                console.log("Animal removido com sucesso!");
                encontrado = true;
                break;
                
            }
            cont++;

            if(encontrado == false){
                throw new Error("Animal nao encontrado");
            }

        }    
        }catch(error: any){
            console.log(error.message);
        }
 
}

}