const peso1 = 1.0
const peso2 = Number ('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger (peso1))
console.log(Number.isInteger (peso2))

const avaliacao1 = 9.5
const avaliacao2 = 4.5

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const média = total / (peso1 + peso2)

console.log(média)
console.log(média.toFixed(2))
console.log(média.toString(2))
console.log(typeof Number)

//Usando Math - que é um objeto, não uma função

const raio = 2
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(area.toFixed(2))

