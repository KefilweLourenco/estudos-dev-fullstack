programa
{
    funcao inicio()
    {
        inteiro vetor[10]
        inteiro i
        inteiro soma
        inteiro media

        soma = 0

        para(i = 0; i < 10; i++)
        {
            escreva("Digite o numero ", i+1, ": ")
            leia(vetor[i])
            soma = soma + vetor[i]
        }

        
        escreva("\nElementos nos indices impares:\n")
        para(i = 0; i < 10; i++)
        {
            se(i % 2 != 0)
            {
                escreva(vetor[i], " ")
            }
        }

        
        escreva("\n\nElementos pares:\n")
        para(i = 0; i < 10; i++)
        {
            se(vetor[i] % 2 == 0)
            {
                escreva(vetor[i], " ")
            }
        }

        
        escreva("\n\nSoma:\n")
        escreva(soma)

       
        media = soma / 10

        escreva("\n\nMedia:\n")
        escreva(media)
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 879; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */