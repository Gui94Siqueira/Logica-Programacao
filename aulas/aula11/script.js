/*
#Parte 1:
    - Crie uma classe Veiculo
    - Adicione as propriedades: marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL
    - Adicione um metodo calcularDistanciaMaxia, que retornará a autonomia * capacidadeTanque
    - Adicione um metodo exibirDetalhes, que retornará os dados concatenados de:
        * marca, modelo, cor, preco.toFixed(2)
*/

class Vehicle {
    constructor(brand, model, price, color, autonomy, tankCapacity, imgURL) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
        this.autonomy = autonomy;
        this.tankCapacity = tankCapacity;
        this.imgURL = imgURL;
    }

    maxDistance() {
        return this.autonomy * this.tankCapacity;
    }

    details() {
        return `marca: ${this.brand} - modelo: ${this.model} - cor: ${this.color} - preço: R$:${this.price.toFixed(2)}`
    }
}

let veiculos = [];

veiculos.push(new Vehicle("fiat", "uno", 60000, "branco", 16, 90, "www.url.com"));
veiculos.push(new Vehicle("fiat", "palio", 90000, "vermelho", 14, 90, "www.url.com"));
veiculos.push(new Vehicle("chrevrolet", "cruze", 120000, "amarelo", 11, 90, "www.url.com"));

console.log(veiculos);