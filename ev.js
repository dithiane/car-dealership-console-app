// function ElectricVehicle(obj){
//   //be sure to use .call to call the Vehicle constructor within the ElectricVehicle constructor
//   Vehicle.call(this,obj);
//   this.type = 'electricvehicle';
//   this.mpg = Number(obj.mpg);
//   this.fuelCapacity = 100;
// }

// //using es5 be sure to include the Vehicle class prototyped methods on the ElectricVehicle class
// ElectricVehicle.prototype = Object.create(Vehicle.prototype);
// ElectricVehicle.prototype.checkFuel = function(fuelcheck){ //polymorphed fuel check
//   if (fuelcheck > 80 ) return true
//   else return false; 
// };

class ElectricVehicle extends Vehicle {
  constructor(obj) {
      super(obj);
      this.type = 'electricvehicle';
      this.mpg = Number(obj.mpg);
      this.fuelCapacity = 100;
  }
  checkFuel(fuelcheck){
    if (fuelcheck > 80 ) return true
    else return false; 
  }
}