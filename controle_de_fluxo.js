// if = true; else = false
//Mostar o num maior que target

let execucao1;
/*let target = 10; 
let num = 11;

if (target < num){
console.log(`Num é Maior que Target`)
} else {
    console.log(`Num é menor ou igual a Target`)
}*/

let execucao2;
compare(10)
compare(11)
compare(9)
compare("b")
compare(undefined)

function compare(num) {
    let target = 10;
    if (typeof (num) != "number") {
        console.log(`Erro: Digite um número!`)
    }
     else if (target === num) {
        console.log(`Num ${num} é igual a target`)
    }
    else if (target < num) {
        console.log(`Num ${num} é Maior que Target`)
    } else {
        console.log(`Num ${num} é menor a Target`)
    }
}