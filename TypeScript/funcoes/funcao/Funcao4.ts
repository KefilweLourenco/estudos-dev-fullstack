

console.log(somar(8,5,2));

function somar(numero1 : number, numero2: number, numero3?: number): number{ //O ponto de interrogação dentro do parametro e na variavel numero3 é para descrever que é opcional

    if(numero3 != undefined)// pode ser usado sem "{}" se o if tiver apenas uma linha de retorno
        return numero1 + numero2 + numero3;
    
    return numero1 + numero2;
}
