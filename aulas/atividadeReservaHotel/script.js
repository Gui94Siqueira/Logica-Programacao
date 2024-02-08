class Room {
    constructor(number, type, price, isReserved = false) {
        this.number = number;
        this.type = type; // Standart, luxo, Suíte
        this.price = price;
        this.isReserved = isReserved;
    }

    availability() {
        if(!this.isReserved) {
            this.isReserved = true;
            return true;
        }

        return false
    }
}

class HotelGuest {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Reserve {
    constructor(bedroom, hotelGuest, initDate, endDate, totalCost = 0) {
        this.bedroom = bedroom;
        this.hotelGuestguest = hotelGuest;
        this.initDate = initDate;
        this.endDate = endDate;
        this.totalCost = totalCost;
    }

    calTotalCost() {
        let cost = Math.abs((this.initDate - this.endDate) * this.room.price);
        return this.totalCost = cost;
    }
}

class Hotel {
    constructor() {
        this.bedrooms = [];
        this.reservations = [];
    }

    addBedroom(room) {
       if(room == !this.reservations.number) {
        this.reservations += room;
       } else {
        alert("quarto Oculpado!")
       }
    }

    bookRoom(room, guest, initDate, endDate) {
        if(room.isReserved == false) {
            this.bedrooms += guest + initDate + endDate;
        } else {
            alert("quarto já reservado!")
        }
    }

    availabilityRooms() {
        // adicionar apenas os quartos disponiveis
        console.log(this.bedrooms)
    }
}
// let quartos = [];
// let reservas = [];

let cliente = new HotelGuest("Guilherme", "guilherme@gmail.com");
//reservas.push(cliente);

let quarto = new Room(123, "Standart", 150, false);
//reservas.push(quarto);

let reserva = new Reserve(quarto, cliente, 7, 10);
//reserva.calTotalCost()

let hotel = new Hotel()
hotel.addBedroom(quarto);
// hotel.bookRoom(hotel.bedrooms[0], cliente, "2024/07/02", "2024/10/02");

console.log(hotel.addBedroom(123));