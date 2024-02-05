class Client {
    constructor(name, cpf) {
        this.name = name;
        this.cpf = cpf;
    }
}

class account {
    constructor(client, number, bankroll) {
        this.client = client;
        this.number = number;
        this.bankroll = bankroll;
    }

    withdraw(value) {
        return true
    }

    deposit(value) {
        return true
    }

    transfer(transferValue, client) {
        return true
    }
}

class checkingAccount extends account {
    constructor(client, number, bankroll, specialCheque) {
        super(client, number, bankroll)
            this.specialCheque = specialCheque;
    }

    withdraw(value) {
        super(value);
        return true;
    }
}

class savingsAccount extends account {
    constructor(client, number, bankroll, yield) {
        super(client, number, bankroll);
            this.yield = yield;
    }

    applyYield() {
        
    }
}