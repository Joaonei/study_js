Os operadores unários são operadores que aceitam um único operando (um valor ou variável) e realizam uma operação. Em JavaScript, existem vários operadores unários, incluindo:

    +: o operador de unidade positiva, que converte o operando para um número
    -: o operador de unidade negativa, que converte o operando para um número e nega esse número
    !: o operador de negação lógica, que inverte o valor booleano do operando
    ~: o operador de negação bit a bit, que inverte cada bit do operando
    typeof: o operador de tipo, que retorna uma string indicando o tipo do operando
    void: o operador void, que avalia o operando e retorna undefined

    console.log(+"3");   // 3
console.log(-5);     // -5
console.log(!"true"); // false
console.log(~5);     // -6
console.log(typeof 4);   // "number"
console.log(void 0); // undefined






class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(`Hi, my name is ${this.name}`);
    }
  }
  
  class Dog extends Animal {
    sayHi() {
      super.sayHi();
      console.log('Woof woof!');
    }
  }
  
  const dog = new Dog('Fido');
  dog.sayHi();
  // Output: Hi, my name is Fido
  // Output: Woof woof!
/*   No exemplo acima, a classe Dog é uma subclass de Animal
   e herda o método sayHi da classe pai. A implementação
    do método sayHi na classe Dog começa chamando o método sayHi do protótipo da classe pai
     usando a palavra-chave super.
      Isso permite que a classe Dog
       adicione sua própria funcionalidade ao método sayHi sem precisar reimplementá-lo
       inteiramente. */



       No exemplo acima, a classe Dog é uma subclass de Animal
        e herda o método sayHi da classe pai. 
        A classe Dog também pode adicionar seus próprios métodos e propriedades e
         sobrescrever os métodos 
        herdados da classe pai.

A palavra-chave extends é um dos principais mecanismos de orientação a objetos em JavaScript e é usada

class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  const animal = new Animal('dog');
  console.log(animal.name); // 'dog'
  



O operador new é comumente usado em conjunto com a palavra-chave class, 
que é uma sintaxe mais sucinta para definir uma função 
construtora e seus métodos.
 No entanto, você também pode usar o operador new com funções construtoras regulares,
  como mostrado no exemplo acima.

O operador new é um dos principais mecanismos de orientação a objetos em JavaScript e 
é usado para criar 
novas instâncias de classes e objetos. 
É importante entender como 
ele funciona para poder trabalhar com objetos em JavaScript de forma eficiente.



class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(dog instanceof Animal); // true




O operador instanceof funciona verificando
 se o protótipo do objeto está presente na cadeia de protótipos da classe ou 
 função construtora especificada. Isso significa que ele 
também retornará true para instâncias de subclasses de uma classe ou 
função construtora especificada.    



O operador in em JavaScript é um operador binário que verifica
 se uma propriedade específica
 existe em um objeto ou em seu protótipo. 
Ele retorna true se a propriedade existir e false caso contrário.

const obj = {
    a: 1,
    b: 2
  };
  
  console.log('a' in obj); // true
  console.log('c' in obj); // false
  Você também pode usar o operador in para verificar se uma propriedade existe em um array:
  
  const arr = [1, 2, 3];

console.log(0 in arr); // true
console.log(3 in arr); // false

O operador delete é um operador unário em JavaScript que é usado para excluir propriedades de um objeto. Ele retorna true se a propriedade foi excluída com sucesso ou false se a propriedade não pôde ser excluída (por exemplo, se ela não existe ou se ela é uma propriedade de protótipo).

Por exemplo:

let obj = {
    a: 1,
    b: 2
  };
  
  delete obj.a;
  console.log(obj.a); // undefined
  
  delete obj.b;
  console.log(obj.b); // undefined
  
  delete obj.c;
  console.log(obj.c); // undefined
  
