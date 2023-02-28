const oe = [19, 8, 10, 7, 13, 56, 23, 2, 76]

   function encontraMenores (pivo,array){
    let menores = 0

       for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual]
        if(produtoAtual < pivo){
            menores ++
        }
    }
    trocaLugar(array,array.indexOf(pivo),menores)
    return array
     }
     function trocaLugar(array,de,para){
        const elem1 = array[de]
        const elem2 = array[para]

        array[para] = elem1
        array[de] = elem2 
    }  
        function divideNoPivo(array){
        let pivo = array[Math.floor(array.length / 2)]
        encontraMenores(pivo,array)
        let valoresMenores = 0

        for(let analisando = 0;analisando < array.length; analisando ++){
            let atual = array[analisando]
            if(atual < pivo){
                trocaLugar(array,analisando,valoresMenores)
                valoresMenores ++
            }
        }

    return array
}
// pegar - 1 - para ficar antes do pivo (ler os indice da direita e da esquerda)
function quickSort(array,esquerda,direita){
if(array.length > 1){
    let indiceAtual = particiona(array,esquerda,direita)
    if (esquerda < indiceAtual - 1){
        quickSort(array,esquerda,indiceAtual - 1)
    }
    if(indiceAtual < direita){
        quickSort(array,indiceAtual,direita)
    }
}
return array
}
function particiona(array,esquerda,direita){
    // console.log('array',array)
    // console.log('esquerda, direita' esquerda, direita)
    let pivo = array[Math.floor((esquerda + direita)/2)]
    let atualEsquerda = esquerda
    let atualDireita = direita

    while(atualEsquerda <= atualDireita){
        while (array[atualEsquerda] < pivo){
            atualEsquerda++
        }
        while(array[atualDireita] > pivo){
            atualDireita--
        }
        if(atualEsquerda <= atualDireita){
            trocaLugar(array,atualEsquerda,atualDireita)
            atualEsquerda ++
            atualDireita--
        }
    }
    return atualEsquerda
}



console.log(quickSort(oe, 0, oe.length-1))
const choroChoro = (quickSort(oe, 0, oe.length-1))
module.exports = choroChoro
''