programa
{
    funcao inicio()
    {
        inteiro numero[10]
        inteiro i, j, aux

        
        para(i = 0; i < 10; i++)
        {
            escreva("Digite um numero: ")
            leia(numero[i])
        }

        
        para(i = 0; i < 10; i++)
        {
            para(j = i + 1; j < 10; j++)
            {
                se(numero[i] < numero[j])
                {
                    aux = numero[i]
                    numero[i] = numero[j]
                    numero[j] = aux
                }
            }
        }

        
        escreva("Vetor ordenado: ")
        para(i = 0; i < 10; i++)
        {
            escreva(numero[i], " ")
        }
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 556; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */