// var VehicleFactory = (function () {

//     var _vehicles = {
//         "car": Car,
//         "truck": Truck,
//         "motorcycle": Motorcycle,
//         "electricvehicle": ElectricVehicle
//     };

//     return {
//         build: function (vehicleType, obj) {
//             if (!vehicleType) {
//                 throw "vehicleType is a required parameter";
//             }

//             vehicleType = vehicleType.toLowerCase();

//             if (_vehicles[vehicleType]) {
//                 return new _vehicles[vehicleType](obj);
//             } else {
//                 throw vehicleType + " is not a valid vehicle";
//             }
//         }
//     };

// })();
// //examples of using the VehicleFactory to build class instances.
// //The objects you pass to each Vehicle will have many more properties than this simple example and be provided from the vehicleData.json file.
// // var car = VehicleFactory.build("CAR", { make:'Toyota',model:'4runner' });
// // var truck = VehicleFactory.build("TrUcK", { make:'Honda',model:'Semi' });
// // var motorcycle = VehicleFactory.build("motorcycle", { make:'BMW',model:'450Z' });
// // var electricVehicle = VehicleFactory.build("electricvehicle", {make:'Tesla', model: 'S'});
// // console.log(car);
// // console.log(truck);
// // console.log(motorcycle);
// // console.log(electricVehicle);

// document.addEventListener('DOMContentLoaded', function () {
//     console.log('THE WINDOW OBJECT IS...', window)
//     //initialize a new dealership on the window object
//     //resolve the promise being returned from fetch to gain access to the vehicle-like objects
//     //loop over the vehicle-like objects and pass each of them to processVehicles. You will have to create processVehicles.

//     //below is using the fetch API to request the data from the vehicleData.json file
//     //fetch will return a promise you need to resolve and then you will need to run another method to convert the body data to json
//     //remember .json() also returns a promise so be sure to resolve that one as well
//     fetch('./vehicleData.json')

// })

// function processVehicles(vehicleObj) {

// }

//_____________________________________________________________________



var VehicleFactory = (function() {
    var _vehicles = {
      car: Car,
      truck: Truck,
      motorcycle: Motorcycle,
      electricvehicle: ElectricVehicle
    };
  
    return {
      build: function(vehicleType, obj) {
        if (!vehicleType) {
          throw "vehicleType is a required parameter";
        }
  
        vehicleType = vehicleType.toLowerCase();
  
        if (_vehicles[vehicleType]) {
          return new _vehicles[vehicleType](obj);
        } else {
          throw vehicleType + " is not a valid vehicle";
        }
      }
    };
  })();
  //examples of using the VehicleFactory to build class instances.
  //The objects you pass to each Vehicle will have many more properties than this simple example and be provided from the vehicleData.json file.
  // var car = VehicleFactory.build("CAR", { make:'Toyota',model:'4runner' });
  // var truck = VehicleFactory.build("TrUcK", { make:'Honda',model:'Semi' });
  // var motorcycle = VehicleFactory.build("motorcycle", { make:'BMW',model:'450Z' });
  // var electricVehicle = VehicleFactory.build("electricvehicle", {make:'Tesla', model: 'S'});
  // console.log(car);
  // console.log(truck);
  // console.log(motorcycle);
  // console.log(electricVehicle);
  document.getElementById("activate").addEventListener("click", function() {
    console.log(subaruDealership);
  });
  document.getElementById("sellVehicle").addEventListener("click", function() {
   
    console.log("DealerShip balance before: ", subaruDealership.balance);
    console.log("Dealership carLot before: ", subaruDealership.carLot);
    var newDealershipBalance = subaruDealership.sellVehicle("WAUBVAFB4BN838575",{address: '555 Fake St. Fakeminster, Folorado 80234', phone: 5555555555},50);
    console.log("Dealership carLot after: ", subaruDealership.carLot);
    console.log("DealerShip sales history: ",subaruDealership.salesHistory);
    console.log("DealerShip balance after: ",newDealershipBalance);
      
  });
  document.getElementById("checkInsurance").addEventListener("click", function() {
    var checkedCar= subaruDealership.insuranceCheck(new Date('2018-12-17T03:24:00'));
    console.log(checkedCar);
    var checkedCar= subaruDealership.insuranceCheck("");
    console.log(checkedCar);
  });

  document.getElementById("renewInsurance").addEventListener("click", function() {
    console.log("Renew insurance for car: ", subaruDealership.carLot[10]);
    console.log(subaruDealership.carLot[10].maintenanceAndInsurance.lastInsured);
    console.log("DealerShip balance before: ", subaruDealership.balance );
    var renewedInsuranceCar = subaruDealership.renewInsurance(subaruDealership.carLot[10]);
    console.log("DealerShip balance after: ", subaruDealership.balance);
    console.log(renewedInsuranceCar.maintenanceAndInsurance.lastInsured );
    console.log("Cost to Dealership after: ", renewedInsuranceCar.costToDealership);
    });

  document.getElementById("refuel").addEventListener("click", function() {
    console.log("fuelCapacity before: ", subaruDealership.carLot[24]);
    console.log("fuelCapacity before: ", subaruDealership.carLot[24].fuel);
    var refuelCar = subaruDealership.refuel(subaruDealership.carLot[24]);
    console.log("fuelCapacity after: ",refuelCar.fuel);
    });
  document.getElementById("salesPitch").addEventListener("click", function() {
    console.log(subaruDealership.salesPitch(subaruDealership.carLot[10]));
    });
  document.getElementById("selectCarForTestDrive").addEventListener("click", function() {
    var make = subaruDealership.carLot[25].make;
    var model = subaruDealership.carLot[25].model;
    var year = subaruDealership.carLot[25].year;
    console.log(make + " " + model + " " + year );
    console.log(subaruDealership.selectCarForTestDrive(make,model,year));
  });
  document.getElementById("maintenanceCheck").addEventListener("click", function() {
    var maintenanceCheck = subaruDealership.maintenanceCheck(new Date('2018-12-17T03:24:00'));
    console.log("a date is provided:" ,maintenanceCheck);
    var maintenanceCheck = subaruDealership.maintenanceCheck("");
    console.log("a date is not provided:" ,maintenanceCheck);
  });
  document.getElementById("maintenance").addEventListener("click", function() {
    console.log("Renew maintenance for car: ", subaruDealership.carLot[10]);
    console.log(subaruDealership.carLot[10].maintenanceAndInsurance.lastServiced);
    console.log("DealerShip balance before: ", subaruDealership.balance );
    var renewMaintenance = subaruDealership.maintenance(subaruDealership.carLot[10]);
    console.log("DealerShip balance after: ", subaruDealership.balance);
    console.log(subaruDealership.carLot[10].maintenanceAndInsurance.lastServiced);
    console.log("Cost to Dealership: ", renewMaintenance.costToDealership);

  });

  
  document.addEventListener("DOMContentLoaded", function() {
    console.log("THE WINDOW OBJECT IS...", window);
    window.readyToShip = [];
    //initialize a new dealership on the window object
    //resolve the promise being returned from fetch to gain access to the vehicle-like objects
    //loop over the vehicle-like objects and pass each of them to processVehicles. You will have to create processVehicles.
  
    //below is using the fetch API to request the data from the vehicleData.json file
    //fetch will return a promise you need to resolve and then you will need to run another method to convert the body data to json
    //remember .json() also returns a promise so be sure to resolve that one as well
    fetch("./vehicleData.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        processVehicles(data);
        init();
      });
  });

  function init() {
      window.subaruDealership = new Dealership('Elena Dealership', 50000000);
      window.subaruDealership.addToLot(window.readyToShip);
  }
  
  function processVehicles(vehicleObjArr) {
    for (var i = 0; i < vehicleObjArr.length; i++) {
      vehicleObjArr[i].maintenanceAndInsurance.lastServiced = new Date(
        vehicleObjArr[i].maintenanceAndInsurance.lastServiced
      );
  
      vehicleObjArr[i].maintenanceAndInsurance.lastInsured = new Date(
        vehicleObjArr[i].maintenanceAndInsurance.lastInsured
      );
      vehicleObjArr[i].costToDealership = (vehicleObjArr[i].price * 0.8).toFixed(2);

      
      if (vehicleObjArr[i].type === "car" || vehicleObjArr[i].type === "truck" || vehicleObjArr[i].type === "motorcycle" || vehicleObjArr[i].type === "electricvehicle") 
      {
        handle[vehicleObjArr[i].type](vehicleObjArr[i]);
      }  
    }
  }
  
  var handle = {
    car: function(vehicleObj) {
      vehicleObj.mpg = Math.floor(getRandomNum(20, 30));
      var newCarInstance = VehicleFactory.build(vehicleObj.type, vehicleObj);
      readyToShip.push(newCarInstance);
      return newCarInstance;
    },
    truck: function(vehicleObj) {
      vehicleObj.mpg = Math.floor(getRandomNum(15, 20));
      vehicleObj.towingCapacity = getRandomNum(5000, 40000);
      var newTruckInstance = VehicleFactory.build(vehicleObj.type, vehicleObj);
      readyToShip.push(newTruckInstance);
      return newTruckInstance;
    },
    motorcycle: function(vehicleObj) {
      vehicleObj.mpg = Math.floor(getRandomNum(35, 50));
      var newMotocycleInstance = VehicleFactory.build(vehicleObj.type, vehicleObj);
      readyToShip.push(newMotocycleInstance);
      return newMotocycleInstance;  
    },
    electricvehicle: function(vehicleObj) {
      vehicleObj.mpg = Math.floor(getRandomNum(200, 300));
      var newElectricVehicleInstance = VehicleFactory.build(vehicleObj.type, vehicleObj);
      readyToShip.push(newElectricVehicleInstance);
      return newElectricVehicleInstance;  
    }

  };

 