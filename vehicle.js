function Vehicle(obj) {
   //please incorporate some error handling to make sure all of the provided parameters are useable

   if (!obj.type) {
    throw alert("No field: type");
   } 
   if (!obj.vin) {
    throw alert("No field: vin");
   } 
   if (!obj.make) {
    throw alert("No field: make");
   }
   if (!obj.model) {
    throw alert("No field: model");
   }
   if (!obj.color) {
    throw alert("No field: color");
   }
   if (!obj.year) {
    throw alert("No field: year");
   }
   if (!obj.mileage) {
    throw alert("No field: mileage");
   }
   if (!obj.price) {
    throw alert("No field: price");
   }
   if (!obj.fuel) {
    throw alert("No field: fuel");
   }
   if (!obj.costToDealership) {
    throw alert("No field: costToDealership");
   }
   if (!obj.clean ) {
    obj.clean = false;
   }
   if (!obj.maintenanceAndInsurance ) {
    throw alert("No field: maintenanceAndInsurance");
   }
   if (!obj.maintenanceAndInsurance.lastServiced ) {
    throw alert("No field: lastServiced");
   }
   if (!obj.maintenanceAndInsurance.lastInsured) {
    throw alert("No field: lastInsured");
   }
   
   
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
};

Vehicle.prototype.checkFuel = function(fuelcheck){
    if (fuelcheck > 5 ) return true
  else return false; 
};

Vehicle.prototype.testDrive = function(miles){

};
