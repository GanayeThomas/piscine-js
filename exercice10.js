// Exercice 10: Calculer la factorielle d'un nombre

function factorielle(nombre) {
    var i, nombre, nb = 1;
    for (i = 1; i <= nombre; i++) {
        nb *= i;
    }
    return nb;
}

console.log(factorielle(8));