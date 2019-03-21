var VehicleFactory = (function () {

    var _vehicles = {
        "car": Car,
        "truck": Truck,
        "motorcycle": Motorcycle,
        "electricvehicle": ElectricVehicle
    };

    return {
        build: function (vehicleType, obj) {
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

document.addEventListener('DOMContentLoaded',function(){
  //initialize a new dealership on the window object
  //resolve the promise being returned from fetch to gain access to the vehicle-like objects
  //loop over the vehicle-like objects and pass each of them to processVehicles. You will have to create processVehicles.

  //below is using the fetch API to request the data from the vehicleData.json file
  //fetch will return a promise you need to resolve and then you will need to run another method to convert the body data to json
  //remember .json() also returns a promise so be sure to resolve that one as well
    fetch('./vehicleData.json')
    })
})

function processVehicles(vehicleObj){

}
