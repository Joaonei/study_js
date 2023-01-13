//*(opicional) 0 ou n vezes 
//+(obrigatório) 1 ou n vezes
//?(opicional) 0 ou n vezes
// \ caractere de escape

const { texto, arquivos, html } = require('./regex.js');

/* 
const regExp1 = /Jo+ão+/gi
console.log(texto.match(regExp1))
 */

/* const regExp2 = /\.jpe?g/gi
for (const arquivo of arquivos){
    console.log(arquivo ,arquivo.match(regExp2))
} */
console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)); // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy