class Jogos{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }}
    const zelda = new Jogos('Zelda', 100) 
    const thesims = new Jogos('The Sims',120) 
    const castlevania = new Jogos('Castlevania',170) 
    const gta = new Jogos('GTA', 172) 
    const cod = new Jogos('Cod',179) 
    const goldmax = new Jogos('Gold Max',190) 
    const candycrush = new Jogos('Candy Crush',112) 
    const wow = new Jogos('Wow',130) 
    const fifa99 = new Jogos('Fifa 99',165) 
    const supermario = new Jogos('Super Mario',171) 
    const assassinscreed = new Jogos('Assasins Creed',180) 
    
    function mergeSort (array,nivelAlinhamento = 0){
        console.log(`Nivel de alinhamento: ${nivelAlinhamento}`)
        console.log(array)

if(array.length > 1){
    const meio = Math.floor(array.length / 2)
    const parte1 = mergeSort(array.slice(0,meio),nivelAlinhamento + 1)
    const parte2 = mergeSort(array.slice(meio,array.length),nivelAlinhamento + 1)
    array = ordena(parte1,parte2)
}
return array
}

function ordena (parte1,parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []
    
    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]
    
    if(produtoAtualParte1.preco < produtoAtualParte2.preco ){
        resultado.push(produtoAtualParte1)
        posicaoAtualParte1++
    }else{
        resultado.push(produtoAtualParte2)
        posicaoAtualParte2++
    }
}
return resultado.concat(posicaoAtualParte1 < parte1.length
? parte1.slice(posicaoAtualParte1)
: parte2.slice(posicaoAtualParte2))
}



const jogos = []
jogos.push(zelda,thesims,castlevania,gta,cod,goldmax,candycrush,wow,fifa99,supermario,assassinscreed)
module.exports = jogos

console.log(mergeSort(jogos))