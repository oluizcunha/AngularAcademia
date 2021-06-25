class ObterPeso{
    valorPeso:number
    constructor(a:number) {
        this.valorPeso=a
   }
}


class Imc extends ObterPeso {
    exibirValorImc(): void{
        console.log("o imc deve ser calculalo pelo peso "+this.valorPeso+"/altura")
    }
}

var objetoValorInformado = new Imc(12)

objetoValorInformado.exibirValorImc()