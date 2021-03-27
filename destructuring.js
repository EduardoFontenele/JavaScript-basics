// Novo recurso do JS2015, serve para extrair variáveis de dentro de um objeto

const pessoa = {
    nome: 'Ana',
    idade:5,
    endereco: {
        rua: 'Rua Machado Assis',
        numero: 100
    }
}

// método convencional com notação ponto:

var cliente1 = pessoa.nome
console.log(cliente1)

// método desestructuring
const { nome, idade } = pessoa
console.log(nome, idade)

// atribuindo um identificador para a var
const { nome: n, idade: i} = pessoa
console.log(n, i)

// pegando uma var de um bloco que já está dentro de um objeto
const { endereco: { rua, numero}} = pessoa
console.log(rua, numero)
