let map = new Map();

// Adicionando entradas ao mapa
map.set("name", "John");
map.set("age", 30);
map.set("isStudent", false);

console.log("Recuperando valores pelas chaves")
console.log(map.get("name")); // "John"
console.log(map.get("age")); // 30

console.log("// Verificando se uma chave existe no mapa")
console.log(map.has("isStudent")); // true

console.log("Removendo uma entrada pelo chave")
map.delete("age");
console.log(map.has("age")); // false

console.log("Iterando sobre as entradas do mapa")
for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}




console.log("limpando o mapa") 
map.clear();
console.log(map.size); // 0
