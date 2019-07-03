// function Dealership(dealershipName,startingBalance){
//   //please incorporate some error handling to make sure all of the provided parameters are useful
//     this.salesHistory = [];
//     this.balance = startingBalance;
//     this.carLot = [];
//     this.dealershipName = dealershipName;
// };

class Dealership {

  constructor(dealershipName,startingBalance){
      this.salesHistory = [];
      this.balance = startingBalance;
      this.carLot = [];
      this.dealershipName = dealershipName
  }

  addToLot(vehicleArr){

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

  }  

  deleteByVin(van) {

    if (van) {
      for (var i = 0; i < this.carLot.length; i++) {
          if(this.carLot[i].van === van.van){
              this.carLot.splice(i,1);
              return true;
          };
      };
    } else return false;
 
  }

  searchByKeyAndValue(key,value, arr){
    
    if (arr !== undefined){
      let index = arr.findIndex(x => x[key] = value);
      if ( index !== -1 ) {
        return arr[index];
      } else false;
    }

  }

  sellVehicle(vin,buyerObj,discountPercentage) {

    if (buyerObj&&vin) {
      var matchedVehicle = this.searchByKeyAndValue('vin',vin,this.carLot);
      var matchedVehicleInSalesHistory = this.searchByKeyAndValue('vin',vin,this.salesHistory);
      if ((matchedVehicle)&&(!matchedVehicleInSalesHistory)){
        if (!matchedVehicle.wash)this.wash(matchedVehicle);      
          this.balance += matchedVehicle.price*(discountPercentage/100).toFixed(2);
          buyerObj.vehicle = matchedVehicle;
          this.salesHistory.push(buyerObj);
          this.deleteByVin(matchedVehicle);
      }  
    }
    return this.balance;

  };


  searchByDateDaysProperties(date, days, arr, property) {
    
    var returnArray = [];
    var diffDays;
    var d;
    if (date){
      for (var i=0; i< arr.length; i++) {
        diffDays = dateDiff.inDays(arr[i]['maintenanceAndInsurance'][property], date);
        if (diffDays>days){
          console.log("Days with a provided date ", diffDays);
          returnArray.push(arr[i]);
        } 
      }
    }
    return returnArray;

  }

  insuranceCheck(date) {
    
    if (date) return this.searchByDateDaysProperties(date, 30, this.carLot,'lastInsured'); 
    else return this.searchByDateDaysProperties(new Date(), 30, this.carLot,'lastInsured');

  };

  // insuranceCheck(date) {

  //   var returnArray = [];
  //   var days;
  //   if (date){
  //     for (var i=0; i< this.carLot.length; i++) {
  //       days = dateDiff.inDays(this.carLot[i].maintenanceAndInsurance.lastInsured, date);
  //       if (days>30){
  //         console.log("Days with a provided date ", days);
  //         returnArray.push(this.carLot[i]);
  //       } 
  //     }
  //   } else {
  //     var today = new Date();
  //     for (var i=0; i< this.carLot.length; i++) {
  //       days = dateDiff.inDays(this.carLot[i].maintenanceAndInsurance.lastInsured, today);
  
  //       if (days>30){
  //         console.log("Days with a not provided date: ", days);
  //         this.renewInsurance(this.carLot[i]);
  //         returnArray.push(this.carLot[i]);
  //       } 
  //     }
  //   }
  //   return returnArray;

  // };

  maintenanceCheck(date){

    if (date) return this.searchByDateDaysProperties(date, 90, this.carLot, 'lastServiced'); 
    else return this.searchByDateDaysProperties(new Date(), 90, this.carLot, 'lastServiced');

  }

//   maintenanceCheck(date){

//     var returnArray = [];
//     var days;
  
//     if (date){
//       for (var i=0; i< this.carLot.length; i++) {
//         days = dateDiff.inDays(this.carLot[i].maintenanceAndInsurance.lastServiced, date);
//         if (days>90){
//           console.log("Days with a provided date: ", days);
//           returnArray.push(this.carLot[i]);
//         } 
//       }
//     } else {
//       var today = new Date();
//       for (var i=0; i< this.carLot.length; i++) {
//         days = (dateDiff.inDays(this.carLot[i].maintenanceAndInsurance.lastServiced, today));
//         if (days>90){
//           console.log("Days with a not provided date: ", days);
//           this.maintenance(this.carLot[i]);
//           returnArray.push(this.carLot[i]);
          
//         } 
//       }
//     }
//     return returnArray;

//  }

maintenance(vehicleObj){

  if (vehicleObj) {
    vehicleObj.maintenanceAndInsurance.lastServiced= new Date();
    var maintenanceCost = Math.floor(getRandomNum(100, 2000));
    console.log("Maintenance Cost : ", maintenanceCost);
    this.balance -= maintenanceCost;
    console.log("Cost to Dealership: ", vehicleObj.costToDealership);
    vehicleObj.costToDealership += maintenanceCost;
    return vehicleObj;
  } return false;

}


renewInsurance (vehicleObj) {
  
  if (vehicleObj) {
    vehicleObj.maintenanceAndInsurance.lastInsured = new Date();
    var insuranceCost = Math.floor(getRandomNum(100, 300));
    console.log("InsuranceCost: ", insuranceCost);
    this.balance -= insuranceCost;
    console.log("Cost to Dealership before: ", vehicleObj.costToDealership);
    vehicleObj.costToDealership += insuranceCost;
    return vehicleObj;
  } else return false;

};

refuel(vehicleObj) {

  if (vehicleObj) {
    vehicleObj.fuel = vehicleObj.fuelCapacity;
    return vehicleObj;
  } else return false;

};

salesPitch(vehicleObj){

  if (vehicleObj) {
    return this.dealershipName + ': ' + vehicleObj.description + ', Price: ' + vehicleObj.price;
  }

};

searchByMakeModel(make,model,year) {

  var car;
  for (var i = 0; i < this.carLot.length; i++) {
      car = this.carLot[i];
      if((car.make === make) && (car.model === model)&&(car.year === year)){
          return this.carLot[i];
      };  
  };

}

selectCarForTestDrive(make,model,year) {

 var carForTestDrive = this.searchByMakeModel(make,model,year);

 if (carForTestDrive) {
    if (carForTestDrive.checkFuel) {
      return carForTestDrive.testDrive(4);
    }
    return false; 
 } else {
    console.log("Can't find the car Drive");
    return false;
 }

};

wash(vehicleObj) {

  if (vehicleObj) {
    vehicleObj.wash = true;
    this.costToDealership += 10;
    this.balance -= 10;
    return vehicleObj.wash; 
  } else return false;

};

}

