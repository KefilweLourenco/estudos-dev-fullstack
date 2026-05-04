import { Animal } from "./Animal";
 
export class Ave extends Animal {
    
    private _voo!: boolean;

    constructor(){ super();}

    //get (retorna o valor)
    public get voo(): boolean{
        return this._voo;
    }
 
    //set (guarda)
    public set voo(voo: boolean){
        this._voo = voo;
    }

    public alimentar(): void {
        this.alimentado = true;
        console.log(` ${this.nome} [Ave] foi alimentado com fruta.`);
    }


    public visualizar(): void {
        super.visualizar();
        console.log(`Voo: ${this._voo}`);
    }

}