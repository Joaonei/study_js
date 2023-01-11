//charAt, charCodeAt, codePointAt
//Retorna o código do caractere ou o caractere em uma posição específica na string.
var minhaString = "Minha string"
console.log(minhaString.charAt(0))

var minhaString = "Minha string"
console.log(minhaString.charCodeAt(0))

var minhaString = "Minha string"
console.log(minhaString.codePointAt(0))

//indexOf, lastIndexOf
//Retorna a posição de uma substring específica na string ou
//a última posição da substring específica, respectivamente.

var minhaString = "Minha string"
console.log(minhaString.indexOf('s',0))

var minhaString = "Minha string"
console.log(minhaString.lastIndexOf('Minha',0))

//startsWith, endsWith, includes
//Retorna se uma string começa, termina ou contém uma outra string específica.
var minhaString = "Minha string"
console.log(minhaString.startsWith('Minha',0))

var minhaString = "Minha string"
console.log(minhaString.endsWith('Minha',0))

var minhaString = "Minha string"
console.log(minhaString.includes('Minha'))

//split
//Separa um objeto String em um array de strings, separando a string em substrings.

var minhaString = "Oh brave new world that has such people in it"
console.log(minhaString.split(" ",))

var minhaString = "Oh brave new world that has such people in it"
console.log(minhaString.split(" ", 3).filter(s => s !== "new"))
//embaralhando
var phrase = "Oh brave new world that has such people in it"
function shufflePhrase(phrase) {
    let words = phrase.split(' ');
    words.sort(() => Math.random() - .5);
    return words.join(' ');
  }
  console.log(shufflePhrase(phrase));



//slice	
//Extrai uma seção de uma string e retorna uma nova string.

var minhaString = "The quick brown fox jumps over the lazy dog."
var splitString = minhaString.split(' ')
console.log(splitString.slice(2,6))

//substring, substr	
//Retorna um subconjunto específico de uma string, 
//definindo os índices inicial e final, ou definindo um índice e um tamanho.