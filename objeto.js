//Objetos são conjuntos pares de chave - valor

const prod1 = {} //pode ser criado de maneira vazia e atribuir valores sequencialmente
prod1.nome = 'iPhone 11'
prod1.preco = 3999.90
prod1['Desconto camarada'] = 0.40 // não é ideal usar espaço em atributos

console.log(prod1)

const prod2 = {
    nome: 'Xiaomi Redmi', /*É importante atentar que ao declarar valores dentro de um objeto de 
    maneira literal, deve-se usar : invés de sinal de igual = */
    preco: 2050.90
}

console.log(prod2)

