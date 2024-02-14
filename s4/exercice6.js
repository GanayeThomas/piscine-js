// Exercice 6: Utilisation de fetch pour récupérer des données d'une API

fetch('https://regres.in/api/users',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        name: 'User1'
    })
}).then(res =>  {
    return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
