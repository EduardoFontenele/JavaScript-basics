function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1, 3, 1, 5))
console.log(soma(1.5, 1.5))
