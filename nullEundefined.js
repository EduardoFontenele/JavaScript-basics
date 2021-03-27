let valor // não inicializado
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)
console.log(produto)

produto.preco=undefined //evitar atribuir undefined
console.log(!!produto.preco)
// uma forma de tirar um atributo de um objeto é fazendo o seguinte:
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

const produto2 = {
    nome: 'Sua mãe',
    preco: null
}

console.log(produto2)
