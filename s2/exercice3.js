// Exercice 3: Filtrer les nombres pairs d'un tableau

let tabNb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let nb = tabNb.filter(function(tabNb)  {
    return tabNb % 2 == 0
})
console.log(nb);