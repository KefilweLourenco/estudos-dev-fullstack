import { Animal } from "../model/Animal";
 
export interface AnimalRepository {
 
    cadastrarAnimal(animal: Animal): void;
    listarAnimais(): void;
    atualizarAnimal(animal: Animal): void;
    removerAnimal(id: number): void;
}
// cria a regra de como eu vou acessar minhas regras 