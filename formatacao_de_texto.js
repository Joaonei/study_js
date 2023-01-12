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
// definindo os índices inicial e final, ou definindo um índice e um tamanho.


var minhaString = "The quick brown fox jumps over the lazy dog."
var subStg = minhaString.substring(0,3)
console.log(subStg)

var minhaString = "The quick brown fox jumps over the lazy dog."
var subStg = minhaString.substr(0,3)
console.log(subStg)

//match, replace, search	
//Trabalha com expressões regulares.

//procura

var minhaString = "The quick brown fox jumps over the lazy dog."
var matchStg = minhaString.match("brown")
console.log(matchStg)

//substitui

var minhaString = "The quick brown fox jumps over the lazy dog."
var replaceStg = minhaString.replace("brown","João")
console.log(replaceStg)

//mostar o número da posição
var minhaString = "The quick brown fox jumps over the lazy dog."
var searchStg = minhaString.search("the")
console.log(searchStg)

//procurar a palavra
let str = "The quick brown fox jumps over the lazy dog.";
let result = str.match(/[a-z]ox/g);
console.log(result);

// normalize
//Retorna a Forma Normalizada Unicode 
//(Unicode Normalization Form) da string que chama o método.

var minhaString = "Amanhã"
var normalizeStg = minhaString.normalize("NFD")
console.log(normalizeStg)

//repeat
//Retorna uma string contendo os elementos do objeto repetidos pela quantidade de vezes dada.

var minhaString = "The quick brown fox jumps over the lazy dog."
var repeatStg = minhaString.repeat(3)
console.log(repeatStg)

//trim
//Retira espaços em branco no começo e no final da string.
var minhaString = " The quick brown fox jumps over the lazy dog. "
var trimStg = minhaString.trim()
console.log(trimStg)

//  Multi-lines
var minhaString = " The quick brown fox jumps \n\ over the lazy dog. "
var trimStg = minhaString.trim()
console.log(trimStg)
