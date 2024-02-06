class Client {
    constructor(name, cpf) {
        this.name = name;
        this.cpf = cpf;
    }
}

class Account {
    constructor(client, number, balance) {
        this.client = client;
        this.number = number;
        this.balance = balance;
    }

    withdraw(value) {
        //verificar se o saldo é maior ou igual ao valor
        //e verificar se o valor é maior que 0
        //retornar ture em caso de sucesso, false caso não
        if(value > 0) {
            if(this.balance >= value) {
                this.balance -= value;
                return true;
            } else {
                return false;
            }
        } else {
            return alert("Indique um valor valido para saque")
        }
    }

    deposit(value) {
        if(value > 0) {
            this.balance += value;
            return true;
        }

        return false;
        
    }

    transfer(transferValue, account) {
        if(this.withdraw(transferValue)) {
            account.deposit(transferValue);
            return true;
        } else {
            alert("Transferência não realizada tente novamente");
            return false;
        }
    }
}

class CheckingAccount extends Account {
    constructor(client, number, balence, specialCheque) {
        super(client, number, balence)
            this.specialCheque = specialCheque;
    }

    withdraw(value) {
        let newBalance = this.balance + this.specialCheque;
        if(newBalance > 0){
            return super.withdraw(value);
        }
        

        return false;
    }
}

class SavingsAccount extends Account {
    constructor(client, number, bankroll, income) {
        super(client, number, bankroll);
            this.income = income;
    }

    applyYield() {
        return this.balance += this.balance * this.income;
    }
}

let accounts = [];
let clients = [];

let clientA = new Client("Fulano", "1234567890");
clients.push(clientA);
let clientB = new Client("Beltrano", "0987654321");
clients.push(clientB);

let contaX = new CheckingAccount(clientA, 123, 100, 150);
accounts.push(contaX)
let contaY = new SavingsAccount(clientB, 123, 200, 0.01);
accounts.push(contaY);
let contaZ = new CheckingAccount(clientB, 235, 200, 180);
accounts.push(contaZ);

contaY.transfer(70, contaX);

console.log("Conta Y: ", contaY);
console.log("Conta X: ", contaX);