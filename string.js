const escola = "Cod3r" // Lembrando que, dentro da chamada, o índice começa a contar em 0, ou seja, C nessa palavra é 0, não 1

/* strings são delimitas por aspas duplas, aspas simples ou crazes*/

console.log(escola.charAt(0)) // Qual caractere está no índice 0?
console.log(escola.charCodeAt(3)) // Qual é o unicode do caractere que está no indíce 3?
console.log(escola.indexOf('3')) // Qual é a posição do caractere 3?
console.log(escola.substring(0, 3)) //vá do indice zero e me dê três caracteres

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, "e"))

console.log('Maria,Pedro,João'.split(',')) //Usando string para quebrar uma string em um Array