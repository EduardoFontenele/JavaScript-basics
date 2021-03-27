const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true},
    { nome: 'iPad Pro', preco: 4000, fragil: true},
    { nome: 'Copo de vidro', preco: 25, fragil: true},
    { nome: 'Colher de pau', preco: 10, fragil: false},
    { nome: 'Barra de metal inox', preco: 2000, fragil: false}
]

/*console.log(produtos.filter(function(p) {
    return true
})) */

const filtroCaro = produto => produto.preco >= 2000
const filtroFrageis = produto => produto.fragil == true

lista = produtos.filter(filtroCaro).filter(filtroFrageis)
console.log(lista)