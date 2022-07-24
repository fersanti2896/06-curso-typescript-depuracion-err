"use strict";
(() => {
    function sumar(a, b) {
        return a + b;
    }
    console.log(`Suma: ${sumar(1, 2)}`);
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    console.log(`Número de Heróes: ${contar(superHeroes)}`);
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman(true);
    const unirheroes = (...personas) => {
        return personas.join(' ');
    };
    const lastName = 'Son';
    const name = 'Gokú';
    console.log(unirheroes(lastName, name));
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    console.log({ noHaceNadaTampoco });
})();
//# sourceMappingURL=tarea.js.map