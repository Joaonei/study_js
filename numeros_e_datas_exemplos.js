let dt = new Date ();

let ndt = new Date();
let novaData = ndt.setFullYear(dt.getFullYear()-10)

let diaSem= ndt.getDay();
let dia = ndt.getDate();
let mes = ndt.getMonth();
let ano = ndt.getFullYear();

let semanas = ['Domingo', 'Segunda', 'Terça','Quarta',"Quinta", 'Sexta', 'Sábado']
let meses = [1,2,3,4,5,6,7,6,8,9,10,11,12]
console.log(`${dia}/${meses[mes]}/${ano},  ${semanas[diaSem]}`)


///////////////////////////////////////


