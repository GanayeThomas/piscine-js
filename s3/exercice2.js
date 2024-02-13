// Exercice 2: Regrouper des éléments d'un tableau par propriété

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
       const key = keyGetter(item);
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return map;
}

const inventaire = [
  { nom: "asperge", type: "legume", quantite: 5 },
  { nom: "banane", type: "fruit", quantite: 0 },
  { nom: "agneau", type: "viande", quantite: 23 },
  { nom: "cerise", type: "fruit", quantite: 5 },
  { nom: "poisson", type: "viande", quantite: 2 },
];

const grouped = groupBy(inventaire, categorie => categorie.type);

console.log(grouped);

