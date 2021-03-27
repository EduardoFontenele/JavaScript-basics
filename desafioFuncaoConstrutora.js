function Carro(modelo, velocidadeMax) {
    this.modelo = modelo
    this.velocidadeMax = velocidadeMax

    this.getInfos = function() {
        console.log(`Modelo: ${this.modelo}`),
        console.log(`Velocidade Máxima: ${this.velocidadeMax}km/h`)
    }
}

const carro1 = new Carro('Fusca', 100)
carro1.getInfos()

const carro2 = new Carro('Celta', 220)
carro2.getInfos()

const carro3 = new Carro('Ferrari', 380)
carro3.getInfos()