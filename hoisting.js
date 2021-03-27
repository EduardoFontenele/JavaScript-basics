// JavaScript possui uma caracteristica peculiar de "içar" as variáveis para o topo
// seja do bloco da função ou do código no geral, por exemplo:

console.log(a) //ao invés de erro, o compilador interpretará como undefined
var a = 2
console.log(a)
var b = 3
console.log(a + b)


