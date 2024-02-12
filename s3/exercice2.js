// Exercice 2: Regrouper des éléments d'un tableau par propriété

const inventaire = [
    { nom: "asperge", type: "legume",},
    { nom: "banane", type: "fruit"},
    { nom: "agneau", type: "viande"},
    { nom: "cerise", type: "fruit"},
    { nom: "poisson", type: "viande"}
  ];

  const resultat = inventaire.group(({ type }) => type);
  
  function inventairegroup(resultat){
    return resultat;
  }