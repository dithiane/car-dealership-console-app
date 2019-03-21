# Car Dealership Console App

## Overview
The purpose of this assignment is to create a car dealership console application.  First you will need to initialize an instance of the Dealership class then get an array of vehicle-like objects from a json file by handling the returned promise of a provided fetch request. After getting the data it will need to be passed through factory pattern in factory.js to create instances of Cars, Trucks, ElectricVehicles and Motorcycles these classes will all extend from a Vehicle class.  As you create each vehicle they will be added to a the Dealership instance carLot property by using a method on the Dealership class.  The Dealership class and all Vehicle extended classes will have methods created to make them behave like an actual car dealership.

## Table of Contents
* [Overview](#overview)
* [Table of Contents](#table-of-contents)
* [Global Functions](#global-functions)
  + [processVehicles(arr)](#processvehiclesarr)
  + [handleCar(vehicleObj)](#handlecarvehicleobj)
  + [handleTruck(vehicleObj)](#handletruckvehicleobj)
  + [handleMotorcycle(vehicleObj)](#handlemotorcyclevehicleobj)
  + [handleElectricVehicle(vehicleObj)](#handleelectricvehiclevehicleobj)
* [Dealership Class](#dealership-class)
  + [Constructor](#constructor)
  + [Properties](#properties)
  + [Methods](#methods)
    - [addToLot(vehicleArr)](#addtolotvehiclearr)
    - [sellVehicle(vin,buyerObj,discountPercentage)](#sellvehiclevinbuyerobjdiscountpercentage)
    - [insuranceCheck(date)](#insurancecheckdate)
    - [renewInsurance(vehicleObj)](#renewinsurancevehicleobj)
    - [maintenanceCheck(date)](#maintenancecheckdate)
    - [maintenance(vehicleObj)](#maintenancevehicleobj)
    - [refuel(vehicleObj)](#refuelvehicleobj)
    - [salesPitch(vehicleObj)](#salespitchvehicleobj)
    - [selectCarForTestDrive(make,model,year)](#selectcarfortestdrivemakemodelyear)
    - [wash(vehicleObj)](#washvehicleobj)
* [Vehicle Class](#vehicle-class)
  + [Constructor](#constructor-1)
  + [Properties](#properties-1)
  + [Methods](#methods-1)
    - [checkFuel()](#checkfuel)
    - [testDrive(miles)](#testdrivemiles)
* [Car subclass extended from Vehicle class](#car-subclass-extended-from-vehicle-class)
  + [Constructor](#constructor-2)
  + [Properties](#properties-2)
  + [Methods](#methods-2)
* [Truck subclass extended from Vehicle class](#truck-subclass-extended-from-vehicle-class)
  + [Constructor](#constructor-3)
  + [Properties](#properties-3)
  + [Methods](#methods-3)
* [ElectricVehicle subclass extended from Vehicle class](#electricvehicle-subclass-extended-from-vehicle-class)
  + [Constructor](#constructor-4)
  + [Properties](#properties-4)
  + [Methods](#methods-4)
    - [checkFuel()](#checkfuel-1)
* [Motorcycle subclass extended from Vehicle class](#motorcycle-subclass-extended-from-vehicle-class)
  + [Constructor](#constructor-5)
  + [Properties](#properties-5)
  + [Methods](#methods-5)



## Global Functions
There is a utils.js file provided with a few global helper functions and an Array extension method feel free to use these to help complete the assignment.

The following global functions are for you to create.
### processVehicles(arr)
The processVehicle function should take in an array of vehicle-like objects (provided from the vehicleData.json file). On each vehicle-like object there is a nested object with the key maintenanceAndInsurance you must pass both date strings inside of this object through the Date constructor so that they will be Date objects.

After converting the date strings to date objects you will need to also replace the value of the costToDealership key to 80% of the value of the price key.

 Once you have updated the vehicle-like objects pass them to their respective function based on the type key on each vehicle-like object.

**obj.type -> function()**
- ```'car'``` -> handleCar(obj)
- ```'truck'``` -> handleTruck(obj)
- ```'electricvehicle'``` -> handleElectricVehicle(obj)
- ```'motorcycle'``` -> handleMotorcycle(obj)

### handleCar(vehicleObj)
The handleCar function will be invoked within the processVehicle function.  It will take in a vehicle-like object and should accomplish the following.
- add a property called ```mpg``` to the vehicleObj and set it's value to a randomly generated number between 20-30
- once the property has been added pass the vehicleObj to the Car constructor using the VehicleFactory provided.
- The newly created Car instance should then be pushed to an array on the window called readyToShip this array will hold Vehicle subclasses waiting to be added to a Dealership.
- This function should return the newly created Car instance.

### handleTruck(vehicleObj)
The handleTruck function will be invoked within the processVehicle function.  It will take in a vehicle-like object and should accomplish the following.
- add a property called ```mpg``` to the vehicleObj and set it's value to a randomly generated number between 15-20.
- add a property called ```towingCapacity``` to the vehicleObj and set it's value to a randomly generated number between 5000-40000.
- once all the properties have been added pass the vehicleObj to the Truck constructor using the VehicleFactory provided.
- The newly created Truck instance should then be pushed to an array on the window called readyToShip this array will hold Vehicle subclasses waiting to be added to a Dealership.
- This function should return the newly created Truck instance.

### handleMotorcycle(vehicleObj)
The handleMotorcycle function will be invoked within the processVehicle function.  It will take in a vehicle-like object and should accomplish the following.
- add a property called ```mpg``` to the vehicleObj and set it's value to a randomly generated number between 35-50.
- once the property has been added pass the vehicleObj to the Motorcycle constructor using the VehicleFactory provided.
- The newly created Motorcycle instance should then be pushed to an array on the window called readyToShip this array will hold Vehicle subclasses waiting to be added to a Dealership.
- This function should return the newly created Motorcycle instance.

### handleElectricVehicle(vehicleObj)
The handleElectricVehicle function will be invoked within the processVehicle function.  It will take in a vehicle-like object and should accomplish the following.
- add a property called ```mpc``` to the vehicleObj and set it's value to a randomly generated number between 200-300.
- once the property has been added pass the vehicleObj to the ElectricVehicle constructor using the VehicleFactory provided.
- The newly created ElectricVehicle instance should then be pushed to an array on the window called readyToShip this array will hold Vehicle subclasses waiting to be added to a Dealership.
- This function should return the newly created ElectricVehicle instance.

## Dealership Class
### Constructor
A new Dealership will take the following parameters
- dealershipName - **String** - this will be used to assign a value to the dealershipName property.
- startingBalance - **Number** - this will be used to assign a value to the balance property.

### Properties
- salesHistory - **Array** - this array will be made up of objects holding data about all vehicle sales that happen at the dealership.
- balance - **Number** - this number will represent the current balance of the car dealership.
- carLot - **Array** - this array will be made up of instances of the Vehicle subclasses.
- dealershipName - **String** - this string will represent the name of the dealership.

### Methods
#### addToLot(vehicleArr)
addToLot will take in an array of Vehicle subclass instances and should accomplish the following.

- a vehicle should not be added to the dealership's carLot array if 3 of that vehicles model are already on the carLot array.
- for each vehicle that gets added to the carLot array the dealership's balance should be reduced by the value of that vehicles costToDealership property.

**return** addToLot should return a number that number will represent the number of vehicles added from the provided array.

#### sellVehicle(vin,buyerObj,discountPercentage)
sellVehicle will take in a vin which is of type string, a buyerObj(example below) and an optional discountPercentage which will be a 2 digit decimal used to reduce the price of the vehicle at time of sale.
```javascript
buyerObjParameterExample = {
  name: 'Soandso',
  address: '555 Fake St. Fakeminster, Folorado 80234',
  phone: 5555555555
};
```
sellVehicle should accomplish the following.
- verify that the vin provided matches a vehicle on the carLot array.
- if the vin matches with a vehicle on the carLot array then
  + the vehicle to be sold should be washed using the dealership's wash method if it's property clean is false
  + the dealerships balance should be increased by the value of the vehicles price property after the discountPercentage is applied.
  + the buyerObj should have a key added to it called vehicle and its value will be the Vehicle subclass instance being sold.
  + after adding the key and value the entire buyerObj should be pushed to the dealership's salesHistory array.
  + finally the vehicle that has been sold should be removed from the carLot array.

**return** sellVehicle should return the current balance of the dealership

#### insuranceCheck(date)
insuranceCheck will take in an optional parameter of date which should be a Date object.  insuranceCheck should do the following.
- If a date is provided it will check each vehicle on the carLot array to see if the vehicles property maintenanceAndInsurance.lastInsured is not greater than 30 days after the date provided (there is a helpful function in the utils.js file that will make this easier to calculate).  If any vehicles insurance is greater than 30 days the vehicle will be added to an array to be returned from the function.
- If a date is not provided it will check each vehicle on the carLot array to see if the vehicles property maintenanceAndInsurance.lastInsured is not greater than 30 days after todays current date.  If the vehicle is greater than 30 days since it was last insured it will be passed to the dealership's renewInsurance method and also pushed to an array to be returned from the function.

**return** insuranceCheck should return an array. Depending on how it's called that array will be filled with vehicles that will be overdue on the date that was passed to the method or vehicles that were overdue and had their insurance renewed.

#### renewInsurance(vehicleObj)
renewInsurance will take in a Vehicle subclass instance and should do the following.
- update the value on the provided vehicle's maintenanceAndInsurance.lastInsured property to today's current date
- generate a random number between 100-300 and use it as the insuranceCost
- decrease the value of the dealership's balance by the value of the insuranceCost variable
- increase the value of the vehicle's costToDealership property by the insuranceCost variable

**return** renewInsurance should return the Vehicle subclass instance that was passed to it when finished

#### maintenanceCheck(date)
maintenanceCheck will take in an optional parameter of date which should be a Date object.  maintenanceCheck should do the following.
- If a date is provided it will check each vehicle on the carLot array to see if the vehicles property maintenanceAndInsurance.lastServiced is not greater than 90 days after the date provided. If any vehicles time since lastServiced is greater than 90 days the vehicle will be added to an array to be returned from the function.
- If a date is not provided it will check each vehicle on the carLot array to see if the vehicles property maintenanceAndInsurance.lastServiced is not greater than 90 days after todays current date.  If the vehicle is greater than 90 days since it was last serviced it will be passed to the dealership's maintenance method and also pushed to an array to be returned from the function.

**return** maintenanceCheck should return an array. Depending on how it's called that array will be filled with vehicles that will be overdue on the date that was passed to the method or vehicles that were overdue and had maintenance performed.

#### maintenance(vehicleObj)
maintenance will take in a Vehicle subclass instance and should do the following.
- update the value on the provided vehicle's maintenanceAndInsurance.lastServiced property to today's current date
- generate a random number between 100-2000 and use it as the maintenanceCost
- decrease the value of the dealership's balance by the value of the maintenanceCost variable
- increase the value of the vehicle's costToDealership property by the maintenanceCost variable

**return** maintenance should return the Vehicle subclass instance that was passed to it when finished.

#### refuel(vehicleObj)
refuel will take in a Vehicle subclass instance and should do the following.
- update the value of the fuel property on the vehicle passed into the method to be equal to the value of it's fuelCapacity property

**return** the refuel method will return the Vehicle subclass instance that was passed to it.

#### salesPitch(vehicleObj)
salesPitch will take in a Vehicle subclass instance and should do the following
- create a string to be used as a salesPitch using the dealership's dealershipName property as well as the vehicle's description and price property.  This string once constructed should be returned from the method

**return** the salesPitch method will return a string representing a catchy sales pitch filled with relevant data.

#### selectCarForTestDrive(make,model,year)
selectCarForTestDrive will take in a String of a vehicle make a String of a vehicle model and a Number of a year. selectCarForTestDrive should do the following.
- find a car on the carLot array that matches the year make AND model provided
- if a match is found the matched vehicles checkFuel method should be called. If true is returned from the checkFuel method the vehicles testDrive method should be called finally return the vehicle that was test driven.
- if no match is found return false

**return** if a match is found for the make model and year provided that match should be returned from the function after being test driven.  If no match is found return false.

#### wash(vehicleObj)
wash will take in a Vehicle subclass instance and should do the following.
- set the value of the vehicles clean property to true.
- increase the value vehicles costToDealership property by 10.
- decrease the value of the dealership's balance property by 10.

**return** true if the car is washed. false if is not.

## Vehicle Class
### Constructor
A new Vehicle will take the following parameters
- obj - **Object** - the values in this object will be used to fill a majority of the vehicle's properties.  Check the bullets below to see what is inside of this object.
  + type - **String** - the value of this string will represent what kind of vehicle it is.
  + vin - **String** - a vehicle identification number (it's still a string datatype).
  + make - **String** - a string representing the make of the vehicle.
  + model - **String** - a string representing the model of the vehicle.
  + color - **String** - a string representing the color of the vehicle.
  + year - **Number** - a number representing the year the vehicle was created.
  + mileage - **Number** - a number representing how many miles a vehicle has travelled.
  + price - **Number** - a number displaying the price that the vehicle will be sold at to customers of the dealership.
  + description - **String** - a brief description of the vehicle using the vehicles color, year, make, model and mileage.
  + costToDealership - **Number** - this number represents the overall amount of money a dealership has invested in a vehicle.
  + clean - **Boolean** - this boolean represents if a car is clean or not. (true === clean)
  + maintenanceAndInsurance - **Object** - this object holds 2 Date objects for keeping track of insurance and maintenance scheduling.(see Date objects below)
    - maintenanceAndInsurance.lastInsured - **Date** - a date reflecting the most recent day the vehicle had it's insurance renewed.
    - maintenanceAndInsurance.lastServiced - **Date** - a date reflecting the most recent day the vehicle had maintenance done.


### Properties
+ type - **String** - the value of this string will represent what kind of vehicle it is.
+ vin - **String** - a vehicle identification number (it's still a string datatype).
+ make - **String** - a string representing the make of the vehicle.
+ model - **String** - a string representing the model of the vehicle.
+ color - **String** - a string representing the color of the vehicle.
+ year - **Number** - a number representing the year the vehicle was created.
+ wheels - **Number** - a number representing the number of wheels a vehicle has. This value will always be ```4```.
+ mileage - **Number** - a number representing how many miles a vehicle has travelled.
+ price - **Number** - a number displaying the price that the vehicle will be sold at to customers of the dealership.
+ description - **String** - a brief description of the vehicle using the vehicles color, year, make, model and mileage.
+ costToDealership - **Number** - this number represents the overall amount of money a dealership has invested in a vehicle.
+ clean - **Boolean** - this boolean represents if a car is clean or not. (true === clean)
+ maintenanceAndInsurance - **Object** - this object holds 2 Date objects for keeping track of insurance and maintenance scheduling.(see Date objects below)
  - maintenanceAndInsurance.lastInsured - **Date** - a date reflecting the most recent day the vehicle had it's insurance renewed.
  - maintenanceAndInsurance.lastServiced - **Date** - a date reflecting the most recent day the vehicle had maintenance done.

### Methods

#### checkFuel()
the checkFuel method will look to see if the vehicle has acceptable fuel levels by doing the following.
- if the vehicle this method is being called on has a fuel property value of greater than 5 return true otherwise return false

**return** Depending on the value of the vehicles fuel this method will return a boolean true or false.

#### testDrive(miles)
the testDrive method will take in a number of miles and should do the following.
- check to see if the miles provided are between 1 and 5 if any miles are passed outside of this the method should return false
- increase the vehicle's mileage by the number of miles passed to testDrive
- decrease the vehicle's fuel value by the number of miles passed to testDrive (you do not need to incorporate mpg or mpc in this calculation just treat every vehicle like so... 1 mile = 1 fuel unit)

## Car subclass extended from Vehicle class
### Constructor
The Car class inherits most of it's properties from it's parent Vehicle class. This constructor description is only listing additional properties unique to a Car.
- obj - **Object** - the values in this object will be used to fill a majority of the Car's properties.  Check the bullets below to see what is inside of this object that differs form a basic Vehicle.
 + mpg - **Number** - this value represents the miles per gallon that the car gets.

A new Car will take the following parameters

### Properties
+ type - **String** - this value will always be ```'car'```
+ mpg - **Number** - this value represents the miles per gallon that the car gets.
+ fuelCapacity - **Number** - this value represents the maximum fuel capacity for this type of Vehicle.  This value will always be ```16```

### Methods

The Car class has no additional methods only the ones inherited from the parent Vehicle class.

## Truck subclass extended from Vehicle class
### Constructor
The Truck class inherits most of it's properties from it's parent Vehicle class. This constructor description is only listing additional properties unique to a Truck.
- obj - **Object** - the values in this object will be used to fill a majority of the Truck's properties.  Check the bullets below to see what is inside of this object that differs form a basic Vehicle.
 + mpg - **Number** - this value represents the miles per gallon that the Truck gets.
 + towingCapacity - **Number** - this value represents the total weight(in lbs) that the Truck can tow.

A new Truck will take the following parameters

### Properties
+ type - **String** - this value will always be ```'truck'```
+ mpg - **Number** - this value represents the miles per gallon that the truck gets.
+ fuelCapacity - **Number** - this value represents the maximum fuel capacity for this type of Vehicle.  This value will always be ```65```
+ towingCapacity - **Number** - this value represents the total weight(in lbs) that the Truck can tow.
+ wheels - **Number** - this value represents the number of wheels a Truck will have.  This value will always be ```8```.

### Methods

The Truck class has no additional methods only the ones inherited from the parent Vehicle class.

## ElectricVehicle subclass extended from Vehicle class
### Constructor
The ElectricVehicle class inherits most of it's properties from it's parent Vehicle class. This constructor description is only listing additional properties unique to a ElectricVehicle.
- obj - **Object** - the values in this object will be used to fill a majority of the ElectricVehicle's properties.  Check the bullets below to see what is inside of this object that differs form a basic Vehicle.
 + mpc - **Number** - this value represents the miles per charge that the ElectricVehicle gets.

A new ElectricVehicle will take the following parameters

### Properties
+ type - **String** - this value will always be ```'electricvehicle'```
 + mpc - **Number** - this value represents the miles per charge that the ElectricVehicle gets.
+ fuelCapacity - **Number** - this value represents the maximum fuel capacity for this type of Vehicle.  This value will always be ```100```

### Methods
The ElectricVehicle class polymorphs the checkFuel method from the Vehicle class

#### checkFuel()
the checkFuel method will look to see if the vehicle has acceptable fuel levels by doing the following.
- if the vehicle this method is being called on has a fuel property value of greater than 80 return true otherwise return false

**return** Depending on the value of the vehicles fuel this method will return a boolean true or false.

## Motorcycle subclass extended from Vehicle class
### Constructor
The Motorcycle class inherits most of it's properties from it's parent Vehicle class. This constructor description is only listing additional properties unique to a Motorcycle.
- obj - **Object** - the values in this object will be used to fill a majority of the Motorcycle's properties.  Check the bullets below to see what is inside of this object that differs form a basic Vehicle.
 + mpg - **Number** - this value represents the miles per gallon that the Motorcycle gets.

A new Motorcycle will take the following parameters

### Properties
+ type - **String** - this value will always be ```'motorcycle'```
+ mpg - **Number** - this value represents the miles per gallon that the Motorcycle gets.
+ fuelCapacity - **Number** - this value represents the maximum fuel capacity for this type of Vehicle.  This value will always be ```10```
+ wheels - **Number** - this value represents the number of wheels a Motorcycle will have.  This value will always be ```2```.

### Methods

The Motorcycle class has no additional methods only the ones inherited from the parent Vehicle class.
