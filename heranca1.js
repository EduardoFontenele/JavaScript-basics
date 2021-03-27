const Ferrari = {
    modelo: 'F40',
    velMax: 320
}

const Volvo = {
    modelo: 'V40',
    velMax: 300

}
console.log(Ferrari.prototype)
console.log(Ferrari.__proto__)
console.log(Ferrari.__proto__ === Object.prototype)
console.log(Volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)