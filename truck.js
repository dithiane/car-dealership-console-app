function Truck(obj) {
    Vehicle.call(this, obj);
};

Truck.prototype = Object.create(Vehicle.prototype);
