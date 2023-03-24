let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for(let pos=0; pos < valores.length; pos++) {
     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/       // um tipo de formatção 

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}    // essa é uma forma mais fácil e simplificada de formatação e essa sintaxe só pode ser utlizada em arrays ou objects


