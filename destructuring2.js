function rand([ min = 0, max = 1000]) {                      // aqui foi criada uma função, e por desestructuring
    const valor = Math.random() * (max - min) + min          // atribuiu-se a ela valores min e max
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}                  //aqui está sendo demonstrado como seria para acessar
console.log(rand(obj))                           //uma variavel de diferentes maneiras, a partir da função criada acima
console.log(rand({ min: 970 }))



