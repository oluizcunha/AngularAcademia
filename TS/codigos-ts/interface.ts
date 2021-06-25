//criação de interface 

interface umaPessoa{
    nome: string
}

interface Programador extends umaPessoa{
    linguagemEscolhida: string
}


var entidade = <Programador>{}

entidade.nome = "luiz"
entidade.linguagemEscolhida = "python"


console.log("Nome do garoto de programa: " + entidade.nome)
console.log("Linguagem escolhida: "+ entidade.linguagemEscolhida)