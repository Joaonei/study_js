/* A declaração for...in executa iterações a partir de uma variável específica, 
percorrendo todas as propriedades de um objeto. 
Para cada propriedade distinta, o JavaScript executará uma iteração */

let frutas = {nome:'banana',preco:9.99, unidade:1}

for( valor in frutas){
    console.log(frutas[valor])
}
/* A declaração for...of cria uma laço com objetos interativos 
((incluindo, Array, Map, Set, assim por conseguinte ),
 executando uma iteração para o valor de cada propriedade distinta. */


let aparelhos = ["Celular", "Fone de Ouvido", "Microfone"]
for (valor2 of aparelhos){
    console.log(valor2)
}