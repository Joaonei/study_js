// map(callback[, thisObject]) retorna um novo array do valor retornado da execução do callback em cada item do array.
const number = [2,4,5,12,34,556,292]

const doubleNumber = number.map(function (elem){
    return elem *2
})
//console.log(doubleNumber)

// ou 

function metade (num){
    return num / 2
}
//console.log(number.map(metade))

// passando fahrenheit
//dados
const fahrenheit = [0,35,26,89,100]
const celcius = fahrenheit.map(celciusForm)
//função
function celciusForm(elm){
    return Math.round( (elm - 32) * 5/9 )
}
//resultado
//console.log(celcius)


//filter(callback[, thisObject]) retorna um novo array contendo os items verdadeiros ao executar o callback.
//remover elementos indesejados com base e algumas condições;

const yetAnotherArray = [2,3,6,3,23,45,65,43,56,3,23]

const uniqueArray = yetAnotherArray.filter( (elem, index, arr) => arr.indexOf(elem) === index)

//console.log(uniqueArray)

//reduce(callback[, initialValue]) aplica callback(firstValue, secondValue) para reduzir a lista de itens para um único valor e retorna este valor.

const rockts = [
    {country:'Estados Unidos' , launches:325  },
    {country:'Rússia' , launches:140 },
    {country: 'China' , launches:110  },
    {country:'Europa' , launches:60  },
    {country: 'Índia', launches:50  }
]


const totalLaunches = rockts.reduce( (perVal, elmen) => perVal + elmen.launches, 0)

console.log(totalLaunches)