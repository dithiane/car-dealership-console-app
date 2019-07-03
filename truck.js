// function Truck(obj) {
//     Vehicle.call(this, obj);
//     this.type ='truck';
//     this.mpg = Number(obj.mpg);
//     this.towingCapacity = Number(obj.towingCapacity);
//     this.fuelCapacity = 65;
//     this.wheels = 8;
// };

// Truck.prototype = Object.create(Vehicle.prototype);

class Truck extends Vehicle {
    constructor(obj) {
        super(obj);
        this.type = 'truck';
        this.mpg = Number(obj.mpg);
        this.towingCapacity = Number(obj.towingCapacity);
        this.fuelCapacity = 65;
        this.wheels = 8;
    }
}


