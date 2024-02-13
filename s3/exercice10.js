// Exercice 10: Exécuter des promesses en série

var myArray = [1, 2, 3, 4, 5, 6]

function myPromise(num){
  return new Promise(res => {
      setTimeout(()=>{
      res(  console.log("done: " + num)  )
    },2000)
  })
}


myPromise(myArray[0])
  .then(x => myPromise(myArray[1]))
  .then(x => myPromise(myArray[2]))
  .then(x => myPromise(myArray[3]))
  .then(x => myPromise(myArray[4]))
  .then(x => myPromise(myArray[5]))
