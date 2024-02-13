// Exercice 8: Trier un tableau d'objets par plusieurs propriétés

const arr = [
    { name: 'Mike', age: 20 },
    { name: 'Peter', age: 30 },
    { name: 'Doris', age: 18 },
    { name: 'Patrick', age: 17}
  ];
  arr.sort((a, b) => {

    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    return 0;
  });
  console.log(arr);