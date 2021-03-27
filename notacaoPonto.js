// usada para acessar os membros de um objeto ou função
console.log(Math.ceil(6.1))

//acessando um membro de um objeto
const obj1 = {}
obj1.nome = 'Bola'
// Poderia ser escrito: obj1['nome'] = 'Bola' ; porém é menos prático
console.log(obj1.nome)

//acessando um membro de uma função
function Obj(nome) {
    this.nome = nome //a função this permite que o membro criado seja válido em escopo global
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
