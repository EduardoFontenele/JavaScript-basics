function soNoticiaBoa (nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soNoticiaBoa(8)
soNoticiaBoa(4)

function seForVerdadeEuFalo (valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo(null)
seForVerdadeEuFalo(666)
seForVerdadeEuFalo("String")
seForVerdadeEuFalo(Object)
seForVerdadeEuFalo()

function MedirTesao(tesao) {
    if(tesao > 1000) {
        console.log('Estou de pau duro')
    }
    if(tesao < 1000) {
        console.log('Estou de pau mole')
    }  
}

MedirTesao(77788)



