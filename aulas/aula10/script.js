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
    constructor(name, live, attack, defense, position, alive = true) {
        this.name = name;
        this.live = live;
        this.attack = attack;
        this.defense = defense;
        this.position = position;
        this.alive = alive;
        this.maxLive = live;
    }

    onDeath() {
        this.alive = false;
        console.log(`O ${this.name} morreu!`);
    }

    damage(damage) {
        if (this.alive) {
            this.live -= damage;
            console.log(`${this.name} sofreu ${damage} de dano, Agora tem ${this.live} de vida`)
            if (this.live <= 0) {
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
        if (character.live < character.maxLive) {
            character.live += hitPoints;
            if (character.live >= character.maxLive) {
                character.live = character.maxLive
                console.log(`O personagem ${this.name} recuperou a vida de ${character.name} que alcançou quantidade de vida maxima ${character.live}`);
            }
        }
    }
}

let personagem1 = new Character("Arthur", 100, 10, 12, 1);
let personagem2 = new Character("Gendalf", 85, 12, 8, 1);

console.log(personagem1);
console.log(personagem2);

console.log(personagem1.wholesale(personagem2));
console.log(personagem2.wholesale(personagem1));

console.log(personagem2.recovery(1, personagem1));
console.log(personagem2.recovery(5));
console.log(personagem2.recovery(20, personagem1));

console.log(personagem1.recovery(20, personagem2));

