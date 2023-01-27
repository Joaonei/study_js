// As classes criam objetos por meio do new newoperador.
// Cada objeto possui algumas propriedades (dados ou método) adicionadas pela classe.
// A classe armazena algumas propriedades (dados ou método) em si,
// que geralmente são usadas para interagir com as instâncias.

//Estes correspondem às três principais características das classes:

//Construtor;
//Métodos de instância e campos de instância;
//Métodos estáticos e campos estáticos.

class Color {
    constructor(r, g, b) {
      this.values = [r, g, b];
    }
    getRed() {
      return this.values[0];
    }
  }
  
  const red = new Color(255, 0, 0);
  console.log(red.getRed());


class Carro {
    constructor (cor, modelo, marca){
        this.cor = cor
        this.modelo = modelo
        this.marca = marca
        this.ligado = false
        this.km = 0
        this.combustivel = 10
    }
    info () {
        console.log("Cor........ :" + this.cor)
        console.log("modelo..... :" + this.modelo)
        console.log("marca...... :" + this.marca)
        console.log("ligado..... :" + (this.ligado ? "Sim":"Não"))
        console.log("km......... :" + this.km)
        console.log("Combustivel :" + this.combustivel)
        console.log(".............");
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}

let c1 = new Carro ("red", "HRV", "Honda",)
let c2 = new Carro ("blue", "Golf", "Vw")
let c3 = new Carro ("green", "Camaro", "GM")
let c4 = new Carro ("pink", "Mustang", "Ford")

c1.ligar()
c4.ligar()

c1.info()
c2.info()
c3.info()
c4.info()


