//every(callback[, thisObject]) retorna verdadeiro se o callback retornar verdadeiro para cada item no array.

function isNumber(valor) {
    return typeof valor === 'number';
}
  var a1 = [1, 2, 3];
 // console.log(a1.every(isNumber));
  var a2 = [1, '2', 3];
  //console.log(a2.every(isNumber));

// Verificar se é maior de 18 anos

const turma = [
    {id: 12, name:'Frederico', age: 8  },
    {id: 47, name:'Francisca', age: 7 },
    {id: 77, name:'Ramon', age: 48 },
    {id: 85, name:'Zennon', age: 52 }
]
//console.log(turma.every(p => p.age >=18) )





//some(callback[, thisObject]) retorna verdadeiro se o callback retornar verdadeiro para pelo menos um item no array.
//verificar se possui um número primo

function isPrime ( value){
    for (let i=2;i<value; i++){
        if (value % 1 === 0){
            return false
        }
    }
return value > 1

}

const oneMoreArray = [8,6,11,20,25,42,11]

//console.log(oneMoreArray.some(isPrime))



//O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

const fruits = [
    {name:'jaca' , quantity:2 },
    {name:'banana' , quantity:0 },
    {name:'cereja' , quantity:5 }

]
//console.log(fruits.find(fruits => fruits.name = 'cereja'))



//O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

console.log([1,2,3,4].includes(2))
