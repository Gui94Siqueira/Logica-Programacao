class Animal {
    constructor(peso, altura, velocidade) {
        this.peso = peso;
        this.altura = altura;
        this.velocidade = velocidade;
    }
    // 4 comportamentos (nasce, crece, reproduz, morre)
    nasce() {
        console.log("nasceu");
    }

    crece() {
        console.log("nasceu");
    }

    reproduz() {
        console.log("nasceu");
    }

    morre() {
        console.log("nasceu");
    }
}

class Mamifero extends Animal {
    constructor(peso, velocidade, altura, amamenta) {
        super(peso, altura, velocidade)
        this.amamenta = amamenta;
    }

    pesilhotermia() {

    }
}

class Reptil extends Animal {
    constructor(peso, altura, velocidae, escamas) {
        super(peso, altura, velocidae);
        this.escamas = escamas;
    }
    
    pesilhotermia() {

    }
}