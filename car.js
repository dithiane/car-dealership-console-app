function Car(obj) {
    Vehicle.call(this,obj);
    this.type = 'car';
    this.mpg = obj.mpg;
    this.fuelCapacity = 16;
};

Car.prototype = Object.create(Vehicle.prototype);
