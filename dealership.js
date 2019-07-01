function Dealership(dealershipName,startingBalance){
  //please incorporate some error handling to make sure all of the provided parameters are useful
    this.salesHistory = [];
    this.balance = startingBalance;
    this.carLot = [];
    this.dealershipName = dealershipName;
};

function duplicates(a,el) {
  var dupArray = [];
  for (var i =0; i < a.length; i++){
    if(a[i] === el ){
      dupArray.push(el);
    }
  }
  return dupArray.length;
}

Dealership.prototype.addToLot = function(vehicleArr){
    var count = 0;
    for (var i=0; i<vehicleArr.length;i++ ){
      if (this.carLot.getCountByKeyValue('model',vehicleArr[i].model) <3) {
        this.carLot.push(vehicleArr[i]);
        this.balance -= vehicleArr[i].costToDealership;
        this.balance = Number(this.balance.toFixed(2))
        count++;
      } 
    };
    return count;
};

Dealership.prototype.searchByVin = function(van,arr) {

  for (var i = 0; i < arr.length; i++) {
      if(this.carLot[i].van === van.van){
          return this.carLot[i];
      };
  };
  return false;
}

Dealership.prototype.deleteByVin = function(van) {
  if (van) {
    for (var i = 0; i < this.carLot.length; i++) {
        if(this.carLot[i].van === van.van){
            this.carLot.splice(i,1);
            return true;
        };
    };
    return false;
  }
}

Dealership.prototype.sellVehicle = function (vin,buyerObj,discountPercentage) {
  
  
  if ((buyerObj)&&(vin)) {
    var matchedVehicle = this.searchByVin(vin,this.carLot);
    var matchedVehicleInSalesHistory = this.searchByVin(vin,this.salesHistory);
    if ((matchedVehicle)&&(!matchedVehicleInSalesHistory)){
      if (!matchedVehicle.wash) {
        this.wash(matchedVehicle);
      }
      console.log("Price of the car: ", matchedVehicle.price);
      this.balance += matchedVehicle.price*(discountPercentage/100).toFixed(2);
      buyerObj.vehicle = matchedVehicle;
      this.salesHistory.push(buyerObj);
      this.deleteByVin(matchedVehicle);
    }  
 }
  return this.balance;
};

Dealership.prototype.insuranceCheck = function(date) {
  var returnArray = [];
  var days;
  if (date){
    for (var i=0; i< this.carLot.length; i++) {
      days = dateDiff.inDays(this.carLot[i].maintenanceAndInsurance.lastInsured, date);
      if (days>30){
        console.log("Days with a provided date ", days);
        returnArray.push(this.carLot[i]);
      } 
    }
  } else {
    var today = new Date();
    for (var i=0; i< this.carLot.length; i++) {
      days = dateDiff.inDays(this.carLot[i].maintenanceAndInsurance.lastInsured, today);
 
      if (days>30){
        console.log("Days with a not provided date: ", days);
        this.renewInsurance(this.carLot[i]);
        returnArray.push(this.carLot[i]);
      } 
    }
  }
  return returnArray;
};

Dealership.prototype.maintenanceCheck = function(date){
  var returnArray = [];
  var days;
 
  if (date){
    for (var i=0; i< this.carLot.length; i++) {
      days = dateDiff.inDays(this.carLot[i].maintenanceAndInsurance.lastServiced, date);
      if (days>90){
        console.log("Days with a provided date: ", days);
        returnArray.push(this.carLot[i]);
      } 
    }
  } else {
    var today = new Date();
    for (var i=0; i< this.carLot.length; i++) {
      days = (dateDiff.inDays(this.carLot[i].maintenanceAndInsurance.lastServiced, today));
      if (days>90){
        console.log("Days with a not provided date: ", days);
        this.maintenance(this.carLot[i]);
        returnArray.push(this.carLot[i]);
        
      } 
    }
  }
  return returnArray;
}

Dealership.prototype.maintenance = function(vehicleObj){

  if (vehicleObj) {
    vehicleObj.maintenanceAndInsurance.lastServiced= new Date();
    var maintenanceCost = Math.floor(getRandomNum(100, 2000));
    console.log("Maintenance Cost : ", maintenanceCost);
    this.balance -= maintenanceCost;
    console.log("Cost to Dealership: ", vehicleObj.costToDealership);
    vehicleObj.costToDealership += maintenanceCost;
    return vehicleObj;
  }
}


Dealership.prototype.renewInsurance = function (vehicleObj) {
  
  if (vehicleObj) {
    vehicleObj.maintenanceAndInsurance.lastInsured = new Date();
    var insuranceCost = Math.floor(getRandomNum(100, 300));
    console.log("InsuranceCost: ", insuranceCost);
    this.balance -= insuranceCost;
    console.log("Cost to Dealership before: ", vehicleObj.costToDealership);
    vehicleObj.costToDealership += insuranceCost;
    return vehicleObj;
  } else return [];
};

Dealership.prototype.refuel = function (vehicleObj) {
  if (vehicleObj) {
    vehicleObj.fuel = vehicleObj.fuelCapacity;
    return vehicleObj;
  }
};

Dealership.prototype.salesPitch = function(vehicleObj){
  if (vehicleObj) {
    return this.dealershipName + ': ' + vehicleObj.description + ', Price: ' + vehicleObj.price;
  }
};

Dealership.prototype.searchByMakeModel = function(make,model,year) {
var car;
for (var i = 0; i < this.carLot.length; i++) {
    car = this.carLot[i];
    if((car.make === make) && (car.model === model)&&(car.year === year)){
        return this.carLot[i];
    };  
};
}

Dealership.prototype.selectCarForTestDrive = function (make,model,year) {
 var carForTestDrive = this.searchByMakeModel(make,model,year);

 if (carForTestDrive) {
    if (carForTestDrive.checkFuel) {
      return carForTestDrive;
    }
    return false; 
 } else return false;

};

Dealership.prototype.wash = function (vehicleObj) {
  if (vehicleObj) {
    vehicleObj.wash = true;
    this.costToDealership += 10;
    this.balance -= 10;
    return vehicleObj.wash; 
  }
};
