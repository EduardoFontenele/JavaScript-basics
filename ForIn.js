const notas = [5.6, 6.5, 7.5, 7.0, 9.0]


for(let indices in notas) {
    console.log(indices, notas[indices])
}

const pessoa = {
    nome: 'Ana',
    idade: '18',
    sexo: 'feminino',
    status: 'solteira'
}

for(let atributos in pessoa) {
    console.log(atributos,'=', pessoa[atributos])
}
