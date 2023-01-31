//Generator é um tipo especial de função que trabalha como uma fábrica para iteradores. 
//A função vira um gerador 
//se ela contém uma ou mais expressões yielde se ela usa uma sintaxe function*.
function* cores(){
 yield 'vermelho';
 yield 'verde';
 yield 'azul';
 yield 'roxo';
 yield 'preto';
 yield 'branco'
} 
const c = cores()
    console.log(c.next())
    console.log(c.next())
    console.log(c.next())
