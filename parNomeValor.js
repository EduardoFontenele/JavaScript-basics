// Par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falae' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de conjuntos par/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 80,
        endereco: {
            rua: 'Rua Blablabla',
            numero: 332
        }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)