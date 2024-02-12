// Exercice 10: Convertir une chaîne de caractères en camelCase

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  console.log(camelize("Je suis un test"));