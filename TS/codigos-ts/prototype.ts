function dadosParticipante(id: number, nome: string) {
    this.id = id
    this.nome = nome
}


var participanteUm = new dadosParticipante(123, "Glen Danzing")
var participanteDois = new dadosParticipante(45, "Johnny Rotten")
dadosParticipante.prototype.email = "glen.danzing@misfits.com"
dadosParticipante.prototype.newemail = "johnny.rotten.@pistols.com"
console.log("O Id do participante 1 é: " + participanteUm.id)
console.log("O nome do participante 1 é: " + participanteUm.nome)
console.log("O e-mail do participante 1 é: " + participanteUm.email)
console.log("O Id do participante 2 é: " + participanteDois.id) conso