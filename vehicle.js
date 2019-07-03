// function Vehicle(obj) {
//    //please incorporate some error handling to make sure all of the provided parameters are useable   
//     this.type = String(obj.type);
//     this.vin = String(obj.vin);
//     this.make = String(obj.make);
//     this.model = String(obj.model);
//     this.color = String(obj.color);
//     this.year = Number(obj.year);
//     this.wheels = 4;
//     this.mileage = Number(obj.mileage);
//     this.price = Number(obj.price);
//     this.fuel = Number(obj.fuel);
//     this.description = 'A ' + obj.color + ' ' + obj.make + ' ' + obj.model + ' with ' +  obj.mileage + ' miles'
//     this.costToDealership = Number(obj.costToDealership);
//     this.clean = Boolean(obj.clean);
//     this.maintenanceAndInsurance = {
//         lastServiced: obj.maintenanceAndInsurance.lastServiced,
//         lastInsured: obj.maintenanceAndInsurance.lastInsured
//     }
// };

// Vehicle.prototype.checkFuel = function(fuelcheck){
//     if (fuelcheck > 5 ) return true
//   else return false; 
// };

// Vehicle.prototype.testDrive = function(miles){
//   if ((miles>1)||(mimes<5)){
//     this.mileage += miles;
//     this.fuel -= miles;
//     return true;
//   } else return false;
// };


class Vehicle {
    constructor(obj){
      this.type = String(obj.type);
      this.vin = String(obj.vin);
      this.make = String(obj.make);
      this.model = String(obj.model);
      this.color = String(obj.color);
      this.year = Number(obj.year);
      this.wheels = 4;
      this.mileage = Number(obj.mileage);
      this.price = Number(obj.price);
      this.fuel = Number(obj.fuel);
      this.description = 'A ' + obj.color + ' ' + obj.make + ' ' + obj.model + ' with ' +  obj.mileage + ' miles'
      this.costToDealership = Number(obj.costToDealership);
      this.clean = Boolean(obj.clean);
      this.maintenanceAndInsurance = {
          lastServiced: obj.maintenanceAndInsurance.lastServiced,
          lastInsured: obj.maintenanceAndInsurance.lastInsured
    }
  }
  checkFuel(fuelcheck){

    if (fuelcheck > 5 ) return true
    else return false; 

  }
  testDrive(miles){

    if ((miles>1)||(mimes<5)){
      this.mileage += miles;
      this.fuel -= miles;
      return this;
    } else return console.log("Can't Drive");;
    
  };

}
