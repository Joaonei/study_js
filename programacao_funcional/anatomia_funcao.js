// function declaration
 function sayHi (name){
    return`Hi ${name}`
 }
 console.log(sayHi('Jonh'))

// function expression
const sum = function (a, b ){
    return a + b
}
const result = sum (7,59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,9))

let x = 3
console.log(x)
x = sum;
console.log(x(10,10));

// anonymous function
 (function (a ,b, c ){
    return console.log(a + b + c)
})(1000,1000,1000);


// arrow function
const increment1 = (n) => {
        return n + 1
}
console.log(increment1(1))
//
const increment2 = n => n + 2
console.log(increment2(2))
//
const increment3 = n => {
    return n + 3}

console.log(increment3(2))

