class Room {
    constructor(number, type, price, isReserved = false) {
        this.number = number;
        this.type = type; // Standart, luxo, Suíte
        this.price = price;
        this.isReserved = isReserved;
    }

    availability() {
        if (!this.isReserved) {
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
        this.hotelGuest = hotelGuest;
        this.initDate = initDate;
        this.endDate = endDate;
        this.totalCost = totalCost;
    }

    calTotalCost() {
        let cost = Math.abs((this.initDate - this.endDate) * this.bedroom.price);
        return this.totalCost += cost;
    }
}

class Hotel {
    constructor() {
        this.bedrooms = [];
        this.reservations = [];
    }

    addBedroom(room) {
        this.bedrooms.push(room);
    }

    bookRoom(room, guest, initDate, endDate) {
        if (!room.availability()) {
            return alert("reservado");

        }

        room.availability();
        const reserva = new Reserve(room, guest, initDate, endDate);
        this.reservations.push(reserva);
    }

    availabilityRooms() {
        // adicionar apenas os quartos disponiveis
        let available = [];
        for (let i = 0; this.bedrooms.length > i; i++) {
            if (!this.bedrooms[i].isReserved) {
                available.push(this.bedrooms[i]);
            }
        }
        return console.log(available)
    }
}
// Criar instancia do hotel
const meuHotel = new Hotel();

// Adicionar quartos ao Hotel
meuHotel.addBedroom(new Room(101, 'Standart', 100));
meuHotel.addBedroom(new Room(102, 'Luxo', 200));
meuHotel.addBedroom(new Room(103, 'Suíte', 300));

// Exibir quartos disponiveis;
meuHotel.availabilityRooms();

// Criar instancia de hóspede
const hospede1 = new HotelGuest('Jonh Doe', 'jonh@exemple.com');

// Reservar um quarto
let reserva1 = new Reserve(meuHotel.bedrooms[0], hospede1, 6, 10);


console.log(`Reseva realizada com sucesso! Custo Total: `, reserva1.calTotalCost());
console.log(reserva1);


// tentar reservar um quarto ocupadp
const reserva2 = meuHotel.bookRoom(meuHotel.bedrooms[0], hospede1, 2, 6);

// Exibir quartos disponiveis após a reserva
meuHotel.availabilityRooms();
console.log(meuHotel)