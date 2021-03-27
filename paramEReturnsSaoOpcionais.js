function area(b, h) {
    const A = b * h
    if(A > 20) {
        console.log(`Área maior do que o permitido: ${A}m²`)
    }   else {
        return A
    }
}
console.log(area(2,2))
console.log(area(3,3))
console.log(area(4,4))
console.log(area(5,5))
console.log(area(6,6))
