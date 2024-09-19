"use strict";
// Classe Car qui implémente l'interface Vehicle
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Créer une instance de la classe Car et appeler la méthode start
const myCar = new Car("Toyota", "Corolla", 2021);
myCar.start(); // Output: Car engine started
