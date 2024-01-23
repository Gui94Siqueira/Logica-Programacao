class Pessoa { // super classe
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    andar() {
        console.log(nome + 'andou!');
    }

    falar() {
        console.log(nome + 'falou!');
    }
}

class Paciente extends Pessoa { // sub classe
    constructor(nome, idade, peso, sintoma, numeroAtendimento, altura) {
        super(nome, idade, peso);
        this.sintoma = sintoma;
        this.numeroAtendimento = numeroAtendimento;
        this.atura = altura;
    }
}

class Medico extends Pessoa {
    constructor(especialidade) {
        this.especialidade = especialidade;
    }
}