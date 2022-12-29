/* //avaliando
try {
    console.log(`Código que será avaliado`)
}//se retornar erro vai se executado
 catch (error) {
    console.log(`Cath - captura qualquer retorno de erro do try`)
}
finally{
console.log("Sempre executara ao final de um bloco try-catch")
} */

try {
 let numero = "oi";
 if(isNaN(numero)){
     throw new Error ("Váriavel não é um número válido!")

 }
    console.log(numero*numero)
} catch (error) {
    console.log("Sistem apresentou uma inconscientencia")
}