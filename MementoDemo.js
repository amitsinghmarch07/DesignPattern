class Memento {
    sequence;
    city;
    constructor(sequence, city) {
        this.sequence = sequence;
        this.city = city;
    }

    print() {
        console.log(`sequence: ${this.sequence} and city: ${this.city}`);
    }
}

class Location {
    static #locationSequence = 1;
    #sequence = Location.#locationSequence++;
    #city;
    constructor() {
        this.#city = "";
    }

    print() {
        console.log(`${this.#sequence}: ${this.#city}`);
    }

    moveTo(city) {
        this.#city = city;
    }

    getMemento() {
        return Memento(this.#sequence, this.#city);
    }

    setMemento(memento) {
        this.#sequence = memento.sequence;
        this.#city = memento.city;
    }
}

class CareTaker {
    undoMementos = [];
    redoMementos = [];
    push(memento) {
        this.undoMementos.push(memento);
    }

    pop() {
        topMemento = this.memento.pop();
        this.redoMementos.push(topMemento);
        return topMemento
    }
}

let location = new Location();
let careTaker = new CareTaker();
location.moveTo("bangalore");
careTaker.addMemento(location.getMemento);
careTaker.pop();
location.moveTo("Indore");
location.print();
location.moveTo("Mumbai");
location.print();