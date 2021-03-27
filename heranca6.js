function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Aula 01', 1)
const aula2 = new Aula('Aula 02', 2)
console.log(aula1, aula2)