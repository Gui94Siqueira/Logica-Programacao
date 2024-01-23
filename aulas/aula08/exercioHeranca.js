class Animal {
    constructor(nasce, crece, reproduz, morre) {
        
        
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
}

class Mamifero extends Animal {
    constructor(nasce, crece, reproduz, morre, amamenta) {
        super(nasce, crece, reproduz, morre)
        this.amamenta = amamenta;
    }
}

class Reptil {

}