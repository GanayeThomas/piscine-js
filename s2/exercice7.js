// Exercice 7: Vérifier si un mot est un palindrome

function palindrome(str){
    let strMin = str.toLowerCase();
    if (strMin.split('').reverse().join('') === strMin){
        console.log("Palindrome");
    } else {
        console.log("non Palindrome");
    }
}

palindrome("MADAM");