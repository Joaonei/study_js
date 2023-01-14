// g - global (encontra todas as ocorrências)
// i - isensitive
const { texto } = require('./regex.js');

const expReg = /música/i;

const found = expReg.exec(texto);
console.log(texto);
console.log(texto.match(RegExp))
console.log(texto.replace(/(Música|joão)/gi, '"$1"'))