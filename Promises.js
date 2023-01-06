//Promises são como promessas na vida real,ela está esperando algum retorno;
/* const myPromise = new Promise((resolve,reject) => {

    const nome = "João"
  if(nome === "Matheus"){
      resolve("Usuário Matheus encontrado!")

  } else{
    reject("O usuário Matheus não foi encontrado")
  }

})

myPromise2.then((data)=>{
    console.log(data)
}) *//* 
// Para encadear mais processos utilizamos o método then
const myPromise = new Promise((resolve,reject) => {

    const nome = "João"
  if(nome === "Matheus"){
      resolve("Usuário Matheus encontrado!")

  } else{
    reject("O Usuário Matheus Não foi encontrado")
  }
  
})

myPromise.then((data)=>{
    return data.toLowerCase()
}).then((stringmodificada)=>{
    console.log(stringmodificada)
} ) */

// resolver várias promessas all Array de promessas
// Race retorna o código para primeira que for resolvida

const p1 = new Promise((resolve,reject)=>{
    console.log("P1 ok!")
})
const p2 = new Promise((resolve,reject)=>{
    console.log("P2 ok!")
})
const p3 = new Promise((resolve,reject)=>{
    console.log("P3 ok!")
})
const p4 = new Promise((resolve,reject)=>{
    console.log("P4 ok!")
})

const resolveAll = Promise.all([p1,p2,p3]).then(data => {
console.log(data)
})