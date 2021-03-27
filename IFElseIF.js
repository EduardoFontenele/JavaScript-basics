Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(1)
imprimirResultado(6)
imprimirResultado(8)

Number.prototype.EstiverEntre = function(min, max) {
    return this >= min && this <= max
}

const chakra = function(Chakra) {
    if(Chakra.EstiverEntre(5000, Infinity)) {
        console.log('É um ninja exímio')
    } else if(Chakra.EstiverEntre(1000, 4999)) {
        console.log('É um ninja comum')
    } else if(Chakra.EstiverEntre(1, 999)) {
        console.log('É uma pessoa comum')
    } else {
        console.log('Não consigo sentir o seu chakra')
    }
} 

chakra(3000)
chakra(6000)
chakra(9000)
chakra(0)
chakra(52342352)
chakra(-1)