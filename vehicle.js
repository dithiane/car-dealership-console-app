function Vehicle(obj) {
   //please incorporate some error handling to make sure all of the provided parameters are useable
    this.type = obj.type;
    this.vin = obj.vin;
    this.make = obj.make;
    this.model = obj.model;
    this.color = obj.color;
    this.year = obj.year;
    this.wheels = 4;
    this.mileage = obj.mileage;
    this.price = obj.price;
    this.description = 'A ' + obj.color + ' ' + obj.make + ' ' + obj.model + ' with ' +  obj.milage + ' miles'
    this.costToDealership = obj.costToDealership;
    this.clean = obj.clean;
    this.maintenanceAndInsurance = {
        lastServiced: obj.maintenanceAndInsurance.lastServiced,
        lastInsured: obj.maintenanceAndInsurance.lastInsured
    }
};

Vehicle.prototype.checkFuel = function(){

};

Vehicle.prototype.testDrive = function(miles){

};
