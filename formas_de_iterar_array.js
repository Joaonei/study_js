//Para iterar um array com repetições em JavaScript, você pode usar o método forEach() ou um loop for tradicional.

//Exemplo usando forEach():

let array = [1, 2, 3, 1, 2, 3];

array.forEach(function(item) {
  console.log(item);
});

//Exemplo usando loop for:

let array = [1, 2, 3, 1, 2, 3];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Você também pode usar o método for...of para iterar sobre os valores de um array

let array = [1, 2, 3, 1, 2, 3];

for (let item of array) {
  console.log(item);
}

//ou usar o método "map" para iterar e modificar o array.

let array = [1, 2, 3, 1, 2, 3];

let newArray = array.map(function(item) {
  return item * 2;
});

console.log(newArray); // [2, 4, 6, 2, 4, 6]
