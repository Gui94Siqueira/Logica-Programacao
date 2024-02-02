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

function cadastrarVeiculo() {
    // recebimento dos valores do HTML
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const cor = document.getElementById('cor').value;
    const autonomia = parseInt(document.getElementById('autonomia').value);
    const capacidadeTanque = parseInt(document.getElementById('capacidadeTanque').value);
    const imgURL = document.getElementById('imgURL').value;

    // Instanciar um novo veículo
    const veiculo = new Vehicle(marca, modelo, preco, cor, autonomia, capacidadeTanque, imgURL);

    // Adicionar o veiculo a nossa lista "banco de dados"
    veiculos.push(veiculo);

    // Atualiza a exibição
    console.log(veiculos);

    // limpar formulário
    document.getElementById('veiculoForm').reset();
}

function exibirVeiculos() {
    const veiculosList = document.getElementById("veiculosList")
}