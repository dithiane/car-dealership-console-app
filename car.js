class Car extends Vehicle {
    constructor(obj) {
        super(obj);
        this.type = 'car';
        this.mpg = Number(obj.mpg);
        this.fuelCapacity = 16;
    }
}

// function Car(obj) {
//     Vehicle.call(this,obj);
//     this.type = 'car';
//     this.mpg = Number(obj.mpg);
//     this.fuelCapacity = 16;
// };

// Car.prototype = Object.create(Vehicle.prototype);
