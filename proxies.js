//Introduzido em ECMAScript 6, objetos Proxy permitem que você intercepte determinadas operações e implementar comportamentos personalizados.
// Por exemplo, receber uma propriedade em um objeto:


const handler = {
    get: (target, key) => {
        //        console.log(target, key)
        if (target[key]) {
            return target[key]
        }
        return "key não enconrada"
    },
    set: (target, key, value) => {
        if (value !== 'João'){
            target[key] = value
        }
    }
}
const alvo = {};
const alvoProxy = new Proxy(alvo, handler)

alvoProxy.teste = 'aaa'
alvoProxy.teste2 = "João"

console.log('log', alvoProxy)
