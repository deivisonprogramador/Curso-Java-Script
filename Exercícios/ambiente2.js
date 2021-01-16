let numero = [5,8,2,9,3]

//numero.push(6)
//numero[6]= 7
//numero.sort()
//console.log(numero)
//console.log(`O vetor tem ${numero.length} posições.`)
//console.log (`O número ${numero[0]} está na posição 0.`)

/*
for (pos=0; pos<numero.length;pos++){
    //numero.sort()
    console.log(`A posição ${pos} tem o numero ${numero[pos]}`)

} */

for (let pos in numero){

    console.log(` A posição ${pos} tem o número ${numero[pos]}.  `)
}

console.log(`A posição do número 9 é ${numero.indexOf(9)}.`)