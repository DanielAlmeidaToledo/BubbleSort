function ordenarVetor(){
    var vetor = [72 , 4 , 22 , 2 , 9];
    var limite = vetor.length;

    document.writeln("BUBBLE SORT / ORDENAÇÃO DOS NÚMEROS: " + vetor + "</br></br>");
    
    for(let i = 0; i < limite; i++){
        for(let j = 0; j < limite; j++){
            if(vetor[j] > vetor[j+1]){
                var temp = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = temp;
            }
        }
    }
    document.writeln("Ordem Crescente: " + vetor + "</br></br>Ordem Decrescente: " + vetor.reverse());
}
