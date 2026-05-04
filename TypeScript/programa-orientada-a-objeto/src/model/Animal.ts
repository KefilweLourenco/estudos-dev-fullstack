export abstract class Animal{
 
    private _id!: number;
    private _nome!: string;
    private _idade!: number;
    private _especie!: string;
    private _cor!: string;
    private _alimentado!: boolean;
   
    // constructor(nome: string, idade: number, especie: string, cor: string){
    //     this._nome = nome;
    //     this._idade = idade;
    //     this._especie = especie;
    //     this._cor = cor;
    // }
 
    constructor(){};
 
    public get nome(): string{
        return this._nome;
    }
 
    public set nome(valor: string){
        this._nome = valor;
    }
 
    public get idade(): number{
        return this._idade;
    }
 
    public set idade(valor: number){
        this._idade = valor;
    }
 
    public get especie(): string{
        return this._especie;
    }
 
    public set especie(valor: string){
        this._especie = valor;
    }
 
    public get cor(): string{
        return this._cor;
    }
 
    public set cor(valor: string){
        this._cor = valor;
    }
 
    public get alimentado(): boolean{        
        return this._alimentado;    
    }    
       
    public set alimentado(valor: boolean){        
        this._alimentado = valor;    
    }
 
    public get id(): number{         return this._id;     }    
    public set id(valor: number){         this._id = valor;     }
 
    public abstract alimentar(): void;
 
    public visualizar(): void{
        console.log("\nInformações do animal cadastrado: ");
        console.log(`ID: ${this._id}`);
        console.log(`Nome ${this._nome}`);
        console.log(`Idade: ${this._idade}`);
        console.log(`Especie: ${this._especie}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Alimentado: ${this._alimentado}`);
    }
 
}