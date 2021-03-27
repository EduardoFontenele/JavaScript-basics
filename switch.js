const imprimirNota = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9: // importante notar que a estrutura switch não retorna um valor booleano, e sim valores verdadeiros e strings
            console.log('Quadro de honra')
            break
        case 7: case 8:
            console.log('Aprovado')
            break
        case 4: case 5: case 6:
            console.log('Recuperação')
            break
        case 0: case 1: case 2: case 3:
            console.log('Estude mais para a próxima')
            break // essencial colocar o break entre cada bloco de código, caso contrário o compilador sairá lendo tudo
        
        default: console.log('Nota inválida')
    }
}

imprimirNota(10)
imprimirNota(7)
imprimirNota(5)
imprimirNota(2)

