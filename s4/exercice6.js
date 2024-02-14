// Exercice 6: Utilisation de fetch pour récupérer des données d'une API

fetch('https://regres.in/api/users')
    .then(res => {
        if (res.ok) {
            console.log('SUCESS');
        } else {
            console.log('Not Sucess');
        }
    }
)   .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
