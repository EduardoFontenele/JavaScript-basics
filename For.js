let contador = 1 //fazendo uma contagem com while
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

// fazendo uma repetição com for
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}
//fazendo uma repetição com for a partir de um array
const notas = [6.5, 7.4, 8.3, 9.2, 10]
for(let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`)
}