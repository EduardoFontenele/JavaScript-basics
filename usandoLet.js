/* A palavra let possui basicamente a mesma função da palavra var, com a diferença de que let já possui essa assimilação
de diferença entre um escopo global e um bloco. Exemplo: */

let valor = 1
    {
        let valor = 2
        console.log('Dentro do bloco = ', valor)
    }
    
console.log('Fora do Bloco = ', valor)

