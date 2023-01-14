const {alfabeto,cpfs,ips} = require('./regex');

//[abc] conjuto
// [^] negação
//[0-9] range do maior para o menor
/* console.log(alfabeto)
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[^a-k]+/g)); */
let ip = ips.match(/[\.0-9]+/gi)


console.log(cpfs.match(/[\.\d\-]+/gi))
console.log(ip[1])