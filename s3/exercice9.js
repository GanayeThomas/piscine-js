// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test

function estAssezHaut(element){
    return element >= 10;
}

console.log([10, 20, 5, 50].every(estAssezHaut));
console.log([10, 50, 30, 52, 11].every(estAssezHaut));