// exercicio factory - tentativa

function criarPessoa(nome, idade) {
    return {
        nome, 
        idade,
    }
}

console.log(criarPessoa('Ana', 15))
console.log(criarPessoa('Eduardo', 17))
console.log(criarPessoa('João', 14))

