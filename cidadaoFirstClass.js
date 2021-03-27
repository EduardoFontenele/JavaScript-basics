//Função é considerada um First-Class Object em JS

//criando de forma literal
function fun1() { }

//armazenando numa variável
const fun2 = function () { }

//armazenando num array
const array = [function (a, b) { return a + b }, fun2, fun1]
console.log(array[0](2, 3))

//armazenando num atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa, eae' }
console.log(obj.falar())

/* const obj ={
    falar = function() {
        return 'Opa, eae'
    }
}
*/


//passando função como paramentro
function run(fun) {
    fun()
}
run(function () { console.log('Tudo bem?') })

//armazenando uma função dentro de uma função
function soma(a, b) {
    return function(c) {
        console.log(a+b+c)
    }
}

soma(5,5)(10)

const dezMais = soma(5,5)
dezMais(5)



