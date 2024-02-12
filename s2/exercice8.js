// Exercice 8: Fusionner deux tableaux et supprimer les doublons

var arrayA = ['Java', 'JavaScript'];
var arrayB = ['C#', 'PHP', 'Java'];
var arrayC = arrayA.concat(arrayB);
var arrayUnique = [...new Set(arrayC)];
console.log(arrayUnique);    
