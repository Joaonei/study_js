//Coleções - São dados ordenados por um valor indexado
// lenght - tamanho 


//interando um array
 var cores = ['vermelho', 'verde', 'azul']
for (i = 0; i < cores.length; i++){
    console.log(cores[i])
}   

// push() - adiciona um ou mais elementos no fim de um array e retorna o comprimento do array

var myArray = ['1','2']
var comp = myArray.push('3')
console.log(myArray)
console.log(comp)

//pop () - remove o útimo elemento de um array e retorna esse elemento
var myArray = ['1','2','3']
var ultimo = myArray.pop()
console.log(myArray)
console.log(ultimo)

// shift() - remove o primeiro elemento de um array e retorna esse elemnto
var myArray = ['1','2','3'];
var primeiro = myArray.shift()
console.log(myArray)
console.log(primeiro)

//unshift () - adiciona um ou mais elementos ao ínicio do array e retorna seu novo comprimento
var myArray = ['1','2','3']
var compr = myArray.unshift('4','5')
console.log(myArray) 
console.log (compr)

// splice(); remove o elemnto de um array e (ocasionalmete substitui), retorna os item que foram removidos do array
var myArray = ['1','2','3','4','5']
myArray.splice(1,3,'a', 'b','c','d')
console.log(myArray)

//sort() - ordena os elementos de uma array
var myArray = ['neve','chuva','fogo']
myArray.sort()
console.log(myArray)

// forEach(function) - interar arrays
var cores = ['vermelho', 'verde', 'azul'];
cores.forEach(function(cor) {
    console.log(cor);
  });

// concat() une dois arrays e retorna um novo array.

var myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c');
console.log(myArray)

// join(deliminator = ',') une todos os elementos de um array dentro de um string.
var myArray = new Array('Vento', 'Chuva', 'Fogo');
var lista = myArray.join(' -  - ')
console.log(lista)

// slice(start_index, upto_index) extrai uma seção de um array e retorna um novo array.

var myArray = new Array('Vento', 'Chuva', 'Fogo');
myArray = myArray.slice(0,2);
console.log(myArray)

//reverse() transpõe (inverte) os elementos de um array, in situ: o primeiro elemento do array se torna o último e o último torna-se o primeiro, e retorna uma referência para o array.

var myArray = new Array('1', '2', '3');
myArray.reverse();
console.log(myArray)
