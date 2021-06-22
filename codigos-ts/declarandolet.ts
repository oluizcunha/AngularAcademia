let numeroUm: number = 1;

function declarandoLet() {
    let numeroDois: number = 2;

    if (numeroUm < numeroDois) {
        let numeroTres: number = 3;
        numeroTres++;
        console.log(numeroTres);

    }

    while (numeroUm < numeroDois) {
        let numeroQuatro: number = 4;
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


//Ou seja, quando declaramos com LET, so podemos utilizar ela localmente.
// Qunado declarar var ela pode ser usada em qualquer lugar 

