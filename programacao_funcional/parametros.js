function logParams(a,b,c){
    console.log(a,b,c)
}

logParams(1,2,3)
logParams(1,2,3,4,5)
logParams(1)
//////////////
function defaultParams(a,b,c = 0){
    console.log(a,b,c)
}

defaultParams(7,8,9)
defaultParams(7,8)
//////////
//spreed para um para um PARAMETRO inderterminado
function logNums (...nums){
    return console.log(nums)
}

logNums(1,2,3,4,5)
////////
function sumAll (...nums){
 let total = 0
 for (let n of nums){
     total += n
 }
 return total
}

console.log(sumAll(1,2,3,4,5,6))
