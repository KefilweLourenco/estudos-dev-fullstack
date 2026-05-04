
tipoProduto("teste");
function tipoProduto(tamanho: number | string) : void{

    if(typeof tamanho === 'number'){
        console.log("O tamanho é um numero");
    }else{
        console.log("\nO tamanho é uma string");
    }

}