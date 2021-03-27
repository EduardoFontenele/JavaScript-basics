// Funções factory tem como objetivo gerar objetos de maneira padronizada
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
