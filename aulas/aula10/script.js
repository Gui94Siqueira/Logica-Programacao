console.log("Olá Aula 10!");

/* Crie uma classe Personagem. O personagem deverá ter:
nome, vida, ataque, defesa, vivo (ou morto), posicao (numero inteiro)
lembre de criar o método construtor

Parte 2: Crie a função/método morrer
    - propriedade "vivo" se torna false, e console.log("morreu")
Crie a função tomarDano
    - tomar dano recebe um parametro, que é o valor do dano
    - diminui os pontos de vida do personagem, com base no dano tomado
    - verifica, se o dano for maior que os pontos de vida, personagem morre
Crie a função atacar
    - atacar, recebe como parametro um personaem/inimigo
    - so pode atacar alguém com vida
    - exibe o console.log informando qual a força do ataque e inimigo atacado

Exercício:
    - Crie um limite de vida máxima para o personagem
    - Crie uma função de recuperar vida que recebe um total de pontos para recuperar
    - A recuperação de vida não pode fazer o personagem ir além da vida máxima
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
    constructor(name, attack, defense, life, position, alive = true) {
        super(name, attack, defense, life, position,alive)
    }
}

class Warrior extends Character {
    constructor(name, attack, defense, life, position, alive = true, shield) {
        super (name, attack, defense, life, position, alive)
        this.shield = shield;
    }

    damage(damage) {
        console.log(`${this.name} sofre dano de ${damage}, mas defendeu com ${this.shield} de escudo`);

        if(damage > this.shield) {
            damage -= this.shield; 
        } else {
            damage = 0;
        }

        super.damage(damage);
    }

    wholesale(enemy) {
        if(Math.abs(enemy.position - this.position) < 2) {
            super.wholesale(enemy);
        } else {
            console.log(`${enemy.name} muito distante para ${this.name} atacar.`)
        }
    }
}

class Mage extends Character {
    constructor(name, attack, defense, life, position, alive = true){
        super(name, attack, defense, life, position, alive)
    }
}

let personagem1 = new Warrior("Aragorn", 10, 12, 100, 5, true, 5);
let personagem2 = new Mage("Gendalf", 12, 8, 85, 2);

console.log(personagem1.wholesale(personagem2));
console.log(personagem2.wholesale(personagem1));
