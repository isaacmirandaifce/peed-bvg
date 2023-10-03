#include <stdio.h>
#include <C:\Users\Isaac\OneDrive - IFCE\Documentos\Disciplinas\PEED\estruturaDeDados\estruturaDeDados\aulaVetores\bibliotecaVetores.h>

/// @brief Função que realiza a travessia do vetor, imprimindo cada uma de seus elementos e o tamanho do vetor.
/// @param vetor 
/// @param tamanhoAtualVetor 
void travessiaVetor(int vetor[], int tamanhoAtualVetor){

    for(int i = 0; i<tamanhoAtualVetor;i++){
        printf("%d ", vetor[i]);
    }

}

/// @brief Função que executa uma busca linear dentro de um vetor
/// @param vetor 
/// @param tamanhoAtualVetor 
/// @param valorElemento 
/// @return retorna o indice do primeiro elemento identificado no array ou retorna -1 caso o elemento não esteja presente
int buscaElemento(int vetor[], int tamanhoAtualVetor, int valorElemento){

    for(int i = 0; i < tamanhoAtualVetor; i++){
        if(vetor[i] == valorElemento){
            return 1;
        }
    }
    return -1;
}

/// @brief Funçção que insere um elemento numa posição especifica do vetor
/// @param vetor 
/// @param tamanhoAtualVetor 
/// @param valorElemento 
/// @param posicaoInsercao 
void insereElemento(int vetor[], int tamanhoAtualVetor, int valorElemento, int posicaoInsercao){

    for(int i = tamanhoAtualVetor - 1; i > posicaoInsercao; i--){
        vetor[i] = vetor[i - 1];
    }
    vetor[posicaoInsercao] = valorElemento;
}

/// @brief A função que deleta um elemento de um vetor. Caso o elemento nao seja encontrado não executa nenhum operação no vetor.
/// @param vetor 
/// @param tamanhoAtualVetor 
/// @param valorElemento 
/// @return Retorna o tamanho atual do vetor
int excluirElemento(int vetor[], int tamanhoAtualVetor, int valorElemento){
    int encontrado = 0;
    
    for(int i = 0; i < tamanhoAtualVetor; i++){
        if(vetor[i] == valorElemento){
            encontrado = 1;

            for (int j = i; j < tamanhoAtualVetor - 1; j++) {
                vetor[j] = vetor[j + 1];
        }
        (tamanhoAtualVetor)--;
            break;
    }
}

    if (!encontrado) {
        printf("Elemento não encontrado.\n");
    }
}
