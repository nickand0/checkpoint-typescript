// Interface Vehicle
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Classe Car qui implémente l'interface Vehicle
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Créer une instance de la classe Car et appeler la méthode start
const myCar = new Car("Toyota", "Corolla", 2021);
myCar.start(); // Output: Car engine started