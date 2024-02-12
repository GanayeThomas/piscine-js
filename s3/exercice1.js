// Exercice 1: Supprimer les éléments falsy d'un tableau

var arr = [0, undefined, false, 1, false, 0, false, undefined, 2, undefined, , NaN , 3];
 
var filtered = arr.filter(Boolean);
console.log(filtered);