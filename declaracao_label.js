/* Um label provê um identificador que permite que este seja referenciado em 
outro lugar no seu programa. 
Por exemplo, você pode usar uma label para identificar um laço, 
e então usar break ou continue 
para indicar quando o programa deverá interromper o laço ou continuar sua execução. */

//break
for(var i= 10; i>0;i--){
    if (i === 5){
        break;
    }
         console.log(i)
}

console.log("deu o break")
//continue

var x = 10;

while(x < 100) { 
    x += 10
    if(x=== 60 || x === 90){
console.log("continue")
        continue
    }
    
    console.log("Testando continue" + x)
}