// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma (2, 3)
imprimirSoma (2)
imprimirSoma (2, 2, 2, 2) //a função ignorará os parâmetros depois de b
imprimirSoma ()

// função com retorno
function soma(a = 1, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())