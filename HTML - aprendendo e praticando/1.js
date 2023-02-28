class Jogos1{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }}
    class Jogos2{
        constructor(nome, preco){
            this.nome = nome
            this.preco = preco
        }}
        function menorValor(arrProdutos, posicaoInicial) {
            let maisBarato = posicaoInicial;
            for (let atual = posicaoInicial; atual < arrProdutos.length; atual ++){
                if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
                    maisBarato = atual
                }
            }
            return maisBarato
         }
    const zelda = new Jogos1('Zelda', 100)
    const thesims = new Jogos1('The Sims',120)
    const castlevania = new Jogos1('Castlevania',170)
    const gta = new Jogos1('GTA', 172)
    const cod = new Jogos1('Cod',179)
    const goldmax = new Jogos1('Gold Max',190)

    const candycrush = new Jogos2('Candy Crush',112)
    const wow = new Jogos2('Wow',130)
    const fifa99 = new Jogos2('Fifa 99',165)
    const supermario = new Jogos2('Super Mario',171)
    const assassinscreed = new Jogos2('Assasins Creed',180)

    const jogos1 = []
jogos1.push(zelda,thesims,castlevania,gta,cod,goldmax)

module.exports = jogos1
console.log(module.exports)

const jogos2 = []
jogos2.push(candycrush,wow,fifa99,supermario,assassinscreed)
module.exports = jogos2
console.log(module.exports)

 console.log(jogos1[menorValor(jogos1,0)])
 module.exports = menorValor;
 console.log(menorValor)

 console.log(jogos2[menorValor(jogos2,0)])
 module.exports = menorValor;
 console.log(menorValor)

 