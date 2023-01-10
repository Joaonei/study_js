Propriedade	Descrição
Number.MAX_VALUE	O maior número representável.
Number.MIN_VALUE	O menor número representável.
Number.NaN	Valor "not a number" especial
Number.NEGATIVE_INFINITY	Valor especial infinito negativo; retornado em overflow
Number.POSITIVE_INFINITY	Valor especial infinito positivo; retornado em overflow
Number.EPSILON	Diferença entre um e o menor valor maior do que um que pode ser representado como um Number.
Number.MIN_SAFE_INTEGER	Mínimo safe integer em JavaScript.
Number.MAX_SAFE_INTEGER	Máximo safe integer em JavaScript.
Método	Descrição
Number.parseFloat()	Analisa um argumento string e retorna um número float. O mesmo que a função global parseFloat().
Number.parseInt()	Analisa um argumento string e retorna um inteiro da raiz ou base especificada. O mesmo que a função globalparseInt().
Number.isFinite()	Determina se o valor passado é um número finito.
Number.isInteger()	Determina se o valor passado é um inteiro.
Number.isNaN()	Determina se o valor passado é NaN. A versão mais robusta da original isNaN().
Number.isSafeInteger()	Determina se o valor passado é um safe integer.
O protótipo Number provê métodos para resgatar informações de objetos Number em vários formatos. A tabela a seguir sumariza os métodos de Number.prototype.

Método	Descrição
toExponential()	Retorna uma string representando o número em uma notação exponencial.
toFixed()	Retorna uma string representando o número em notação com ponto-fíxo.
toPrecision()	Retorna uma string representando o número em uma precisão especificada na notação de ponto-fíxo.
----

A tabela a seguir sumariza os métodos do objeto Math.

Método	Descrição
abs()	Valor absoluto
sin(), cos(), tan()	Funções trigonométricas padrão; Argumentos em radianos
asin(), acos(), atan(), atan2()	Funções trigonométricas inversas; retorna valores em radianos
sinh(), cosh(), tanh()	Funções trigonométricas hiperbólicas; retorna valores em radianos.
asinh(), acosh(), atanh()	Funções trigonométricas hiperbólicas inversas; retorna valores em radianos.
pow(), exp(), expm1(), log10(), log1p(), log2()	Funções exponenciais e logarítmicas.
floor(), ceil()	Retorna o maior/menor inteiro que é menor/maior inteiro que ou igual ao argumento.
min(), max()	Retorna menor ou maior (respectivamente) de uma lista separada por vírgula de argumentos numéricos
random()	Retorna um número aleatório entre 0 e 1.
round(), fround() (en-US), trunc(),	Funções de arredondamento e truncamento.
sqrt(), cbrt(), hypot()	Raiz quadrada, raiz cúbica, raiz quadrada da soma de argumentos ao quadrado.
sign()	O sinal de um número, indicando se o número é positivo, negativo ou zero.
clz32(), imul() (en-US)	Número de zeros à esquerda na representação binária de 32-bits. The result of the C-like 32-bit multiplication of the two arguments.
-------

Aqui estão alguns exemplos de como criar uma data:

let hoje = new Date();
console.log(hoje); // Imprime a data e hora atuais

let natal = new Date("December 25, 2020");
console.log(natal); // Imprime 25 de dezembro de 2020

let natal2 = new Date(2020, 11, 25);
console.log(natal2); // Imprime 25 de dezembro de 2020

Depois de criar uma instância de Date, você pode usar os métodos e propriedades fornecidos pelo objeto para obter informações sobre a data, como o ano, mês, dia, hora, minuto, segundo, etc.

Alguns exemplos de métodos e propriedades comuns do objeto Date:

    getFullYear(): Retorna o ano da data.
    getMonth(): Retorna o mês da data (de 0 a 11).
    getDate(): Retorna o dia do mês (de 1 a 31).
    getDay(): Retorna o dia da semana (de 0 a 6).
    getHours(): Retorna as horas (de 0 a 23).
    getMinutes(): Retorna os minutos (de 0 a 59).
    getSeconds(): Retorna os segundos (de 0 a 59).
    getTime(): Retorna a data em milissegundos desde 1 de janeiro de 1970.
    toDateString(): Retorna a data em formato de string (por exemplo, "Sun Jul 17 2022").
    toISOString(): Retorna a data em formato ISO 8601 (por exemplo, "2022-07-17T00:00:00.000Z").
    toUTCString() : Retorna data em formato de string UTC (por exemplo, "Sun, 17 Jul 2022 00:00:00 UTC").

Além disso, existem também alguns métodos estáticos do

