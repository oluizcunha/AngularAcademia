var numeroUm = 1;
function declarandoLet() {
    var numeroDois = 2;
    if (numeroUm < numeroDois) {
        var numeroTres = 3;
        numeroTres++;
        console.log(numeroTres);
    }
    while (numeroUm < numeroDois) {
        var numeroQuatro = 4;
        numeroUm++;
        console.log(numeroUm);
    }
    console.log("numeroUm: " + numeroUm);
    console.log("numeroDois: " + numeroDois);
    //console.log(numeroTres);
    //Compiler Error: Cannot find name 'numeroTres' //console.log(numeroQuatro);
    //Compiler Error: Cannot find name 'numeroQuatro' } 
}
declarandoLet();
