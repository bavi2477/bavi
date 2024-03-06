class Car {
    constructor(color = "White", model= "Creta", power = 400, year = 2021, price = 1800000 , brand= "Hyundai", engineType = "v8", fuelType = "diesel") {
        this.color = color;
        this.model = model;
        this.power = power;
        this.year = year;
        this.price = price;
        this.brand = brand;
        this.engineType = engineType;
        this.fuelType =fuelType;
    }
}

const car1 = new Car();
console.log(car1);

const car2 = new Car("maroon", "audi" , 500);
console.log(car2);

console.table([car1, car2]);