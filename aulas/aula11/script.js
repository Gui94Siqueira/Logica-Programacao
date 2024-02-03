
class Person {
    constructor(name, birt) {
        this.name = name;
        this.birt = birt;
    }

    introduce(person) {
        console.log(`Olá, meu nome é ${this.name}`);
        PermissionStatus.know(this);
    }

    know(person) {
        console.log(`Prazer em conhece-lo ${person.name}, meu nome é ${this.name}`);
    }

    isAdult(year) {
        let adult = year - this.birt > 18;
        let positiveAge = year - this.birt >= 0;
        
        if(adult) {
            return true;
        } else if(!adult && positiveAge) {
            return false;
        }

        return "Pessoa não era nascida nesse ano!"
    }
}
const pessoaA = new Person("Fulano", 2000);
const pessoaB = new Person("Beltrano", 2012);

//pessoaA.seApresentar(pessoaB)
console.log(pessoaA.isAdult(2024));

