//Enumerando todas as propriedades de um objeto
/* for...in  loops Esse método caminha por todas as
 propriedades enumeráveis de um objeto e sua cadeia de protótipos 
 É importante notar que o "for...in"
  também irá iterar sobre as propriedades herdadas de protótipos. 
  Se você quiser iterar apenas sobre as propriedades diretamente no objeto, você pode 
 usar o método "Object.keys()" ou "Object.entries()" junto com um loop "for...of".
 
 
 */



/*  for (var prop in object) {
    // código a ser executado para cada propriedade
  }
 */


  let car = {
    make: "Honda",
    model: "Civic",
    year: 2020
  };
  
  for (let prop in car) {
    console.log(prop + ": " + car[prop]);
  }


 /*  Object.keys(o) 
   Esse método retorna um array com todos os nomes ("chaves") de propriedades próprios
    de um objeto o (mas não na cadeia de protótipos).
 */

  let car2 = {
    make: "Honda",
    model: "Civic",
    year: 2020
  };
  
  let keys = Object.keys(car2);
  console.log(keys);
  
  for (let key of keys) {
    console.log(key + ": " + car2[key]);
  }
  
/*   Object.getOwnPropertyNames(o) 
 Esse método retorna um array contendo todos os nomes de propriedades próprios
  (enumeráveis ou não) de um objeto o.
 */
  let car3 = {
    make: "Honda",
    model: "Civic",
    year: 2020
  };
  
  Object.defineProperty(car, 'hiddenProp', {
    enumerable: false,
    value: 'hiddenValue'
  });
  
  console.log(Object.keys(car3)); // Output: ["make", "model", "year"]
  console.log(Object.getOwnPropertyNames(car)); // Output: ["make", "model", "year", "hiddenProp"]
  
// Funções construtoras
// pascal case
function Celular(marca, tamanhoTela, capacidadeBateria) {
  this.marca = marca;
  this.tamanhoTela = tamanhoTela
  this.capacidadeBateria = capacidadeBateria
  this.ligar = function () {
    console.log('fazendo ligação')
  }

}

const celular = new Celular ('Asus', 5.5,5000);
console.log(celular)

//// Ojeto.create
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"
