/* Em JavaScript, um objeto Set é uma coleção de valores únicos.
 Cada valor (ou elemento) pode ocorrer apenas uma vez no conjunto,
  independentemente de quantas vezes ele foi adicionado. É semelhante a um objeto Map,
   mas só armazena chaves, enquanto um Map armazena chaves e valores. 
   Um objeto Set pode ser criado usando a sintaxe "new Set()". 
Ele também possui métodos para adicionar, remover e verificar a existência de elementos.
 */

let mySet = new Set (['joão', 'wiliam', 'Thomas', "Skyle"]);
console.log(mySet.size)//ao invés de lenght

mySet = mySet.add ('Márcio');
console.log(mySet)//add adicona sem repetir

mySet.delete('joão');// deletando
console.log(mySet.has('joão')); // verificando