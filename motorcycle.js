//please define your motorcycle subclass here
function Motorcycle(obj){
    Vehicle.call(this,obj);
    this.type = 'motorcycle';
    this.mpg = Number(obj.mpg);
    this.fuelCapacity = 10;
    this.wheels = 2;
}
Motorcycle.prototype = Object.create(Vehicle.prototype);