// Exercice 1: Utilisation de Promise.all

let promise1 = new Promise((resolve, reject) => {
    resolve("Hello! ");
});
 
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("GeeksforGeeks");
    }, 1000);
});
 
promise1.then((result1) => {
    console.log(result1);
    return promise2;
}).then((result2) => {
    console.log(result2);
});