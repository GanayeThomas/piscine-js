// Exercice 5: Compter les occurrences d'une lettre dans une chaîne

function nbre_caracteres(lettre,mot)
{
    mot2 = mot.split(lettre);
    nbre_de_fois_trouve = mot2.length-1;
    return nbre_de_fois_trouve;
}
console.log(nbre_caracteres('e','jeanjaquejeanpatreck'));