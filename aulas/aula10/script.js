console.log("Olá Aula 10!");
/*
Parte 1: Crie uma classe Personagem. O personagem deverá ter:
nome, vida, ataque, defesa, vivo (ou morto), posicao (numero inteiro)
lembre de criar o método construtor 

Parte 2: Crie a função/método morrer
    - propriedade "vivo" se torna false, e console.log("morreu")
Crie a função tomarDano
    - tomar dano recebe um parametro, que é o valor do dano
    - diminui os pontos de vida do personagem, com base no dano tomado
    - verifica, se o dano for maior que os pontos de vida, personagem morre
    - se os pontos de vida forem menor ou igual a zero, personagem morre
    - ao morrer, personagem continua com 0 pontos de vida
    - o personagem só pode tomar dano se estiver vivo

Crie a função atacar
    - atacar, recebe como parametro um personaem/inimigo
    - so pode atacar alguém com vida
    - exibe o console.log informando qual a força do ataque e inimigo atacado

Exercício:
    - Crie um limite de vida máxima para o personagem
    - Crie uma função de recuperar vida que recebe um total de pontos para recuperar
    - A recuperação de via não pode fazer o personaem ir além da vida máxima

Parte 3: Crie a herança
    - Crie as classes Arqueiro, Guerreiro e Mago
    - Todas as 3 classes herdam de personagem

Alterações do Guerreiro:
    - Acrescente a propriedade "escudo" na classe Guerreiro.
    - A função tomarDano do Guerreiro deve proteger seus pontos de vida,
    abatendo o dano sofrido dos pontos do seu escudo.    
    
    - Acrescente a sobrescrita da função atacar, verificando a posição do inimigo
    - Se o inimigo estiver a mais de 1 de distância, o guerreiro não pode atacar.

Alterações do Arqueiro:
    - O arqueiro só pode atacar se a distancia dele para o oponente for maior do que 3.
    - O arqueiro tem um totalDeFlechas.
    - O arqueiro só pode atacar se o total de flechas for maior que 0

    - Crie a função recarregarFlehca, que recebe por parametro a quantidade a recarregar
    - A função deve retornar o total de flechas recarregadas.
*/

class Character {
    constructor(name, life, attack, defense, position, alive = true) {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
        this.position = position;
        this.alive = alive;
        this.maxLive = life;
    }

    onDeath() {
        this.alive = false;
        console.log(`O ${this.name} morreu!`);
    }

    damage(damage) {
        if (this.alive) {
            this.life -= damage;
            console.log(`${this.name} sofreu ${damage} de dano, Agora tem ${this.life} de vida`)
            if (this.life <= 0) {
                this.vida = 0;
                this.onDeath();
            }
        } else {
            console.log(`${this.name} não pode mais sofrer dano!`);
        }
    }

    wholesale(enemy) {
        if (enemy.alive) {
            console.log(`${this.name} atacou ${enemy.name} com força de ${this.attack}`);
            enemy.damage(this.attack);
        } else {
            console.log("Não é possível atacar um inimigo morto!");
        }
    }

    recovery(hitPoints, character = this) {
        if (character.life < character.maxLive) {
            character.life += hitPoints;
            if (character.life >= character.maxLive) {
                character.life = character.maxLive
                console.log(`O personagem ${this.name} recuperou a vida de ${character.name} que alcançou quantidade de vida maxima ${character.life}`);
            }
        }
    }
}

class Archer extends Character {
    constructor(name, attack, defense, life, position, alive = true, arrows) {
        super(name, attack, defense, life, position, alive)
        this.arrows = arrows;
    }

    wholesale(enemy) {
        if (this.arrows > 0 && Math.abs(this.position - enemy.position) > 3) {
            super.wholesale(enemy);
            this.arrows--;
        } else if (!this.arrows > 0 && Math.abs(this.position - enemy.position) > 3) {
            console.log(`${this.name} está sem flechas para atacar!`);
        } else if (this.arrows > 0 && !Math.abs((this.position - enemy.position) > 3)) {
            console.log(`${this.name} não pode atacar ${enemy.name} pois estão próximos ${this.position} - ${enemy.position}`)
        }
    }

    rechargeArrows(amount) {
        if (amount > 0) {
            this.arrows += amount;
        }
        return this.arrows;
    }

}

class Warrior extends Character {
    constructor(name, attack, defense, life, position, alive = true, shield) {
        super(name, attack, defense, life, position, alive)
        this.shield = shield;
    }

    damage(damage) {
        console.log(`${this.name} sofre dano de ${damage}, mas defendeu com ${this.shield} de escudo`);

        if (damage > this.shield) {
            damage -= this.shield;
        } else {
            damage = 0;
        }

        super.damage(damage);
    }

    wholesale(enemy) {
        if (Math.abs(enemy.position - this.position) < 2) {
            super.wholesale(enemy);
        } else {
            console.log(`${enemy.name} muito distante para ${this.name} atacar.`)
        }
    }
}

class Mage extends Character {
    constructor(name, attack, defense, life, position, alive = true) {
        super(name, attack, defense, life, position, alive)
    }
}

let persoGuerreiro = new Warrior("Aragorn", 10, 12, 100, 5, true, 5);
let persoMago = new Mage("Gendalf", 12, 8, 85, 2);
let persoArqueiro = new Archer("Legolas", 18, 9, 60, 15, true, 2);
let persoArqueiro2 = new Archer("Robin Hood", 15, 9, 60, 10, true, 8);

// console.log(persoGuerreiro.wholesale(persoMago));
// console.log(persoMago.wholesale(persoGuerreiro));

console.log(persoArqueiro.wholesale(persoArqueiro2));
console.log(persoArqueiro2.wholesale(persoArqueiro));
console.log(persoArqueiro.wholesale(persoArqueiro2));

console.log(`Total de flechas do ${persoArqueiro.name} agora é ${persoArqueiro.rechargeArrows(5)}`);
console.log(`Total de flechas do ${persoArqueiro.name} agora é ${persoArqueiro.rechargeArrows(5)}`);
