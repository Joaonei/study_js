let dt = new Date ();

let ndt = new Date();
let novaData = ndt.setDate(dt.getDay()+2)

let diaSem= dt.getDay();
let dia = dt.getDate();
let mes = dt.getMonth();
let ano = dt.getFullYear();

let semanas = ['Domingo', 'Segunda', 'Terça','Quarta',"Quinta", 'Sexta', 'Sábado']
let meses = [1,2,3,4,5,6,7,6,8,9,10,11,12]
console.log(`${dia}/${meses[mes]}/${ano},  ${semanas[diaSem]}`)