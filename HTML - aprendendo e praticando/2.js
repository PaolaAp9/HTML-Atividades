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
    function juntaListas(jogos1,jogos2){
        let jogos3 = [jogos1,jogos2]
        let atual = 0
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
  
    const Jogos3 = []
    let i = 0
    while(i<jogos1.length && i < jogos2.length)
    {
        if(jogos1[i].preco< jogos2[i].preco){
            Jogos3.push(jogos1[i])
            Jogos3.push(jogos2[i])
        }
        else{
            Jogos3.push(jogos2[i])
            Jogos3.push(jogos1[i])

        }
        i++
    }