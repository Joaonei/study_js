/* Você pode aninhar uma função dentro de outra.
 A função aninhada (interna) é acessível apenas para a função que a contém (exterior). */
const soma = (...valores) => {
    const somar = val => {
        let res =0;
        for (v of val)
        res+=v
        return res
    }
    return somar(valores)
}
 console.log(soma(15,10,5))
 valor = [15,10,5]
 console.log(soma(...valor))