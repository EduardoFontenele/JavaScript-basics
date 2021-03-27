// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Blablabla', preco: 1.99, tag:'Promo'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Notebook'
delete produto.tag
produto.desconto = 0.1
console.log(produto)

// Object.seal
const pessoa = Object.seal({nome: 'Sandra', sobrenome: 'Silva'})

pessoa.nome = 'Lisandra'
pessoa.sobrenome = 'Soares'
pessoa.idade = 3
delete pessoa.nome
console.log(pessoa)

// Object.freeze = Object.seal + valores constantes