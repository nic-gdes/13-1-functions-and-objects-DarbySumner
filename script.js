// Nothing here yet...
// Make sure to link your JS in index.html!

// 1. Create a Car class, with a constructor that accepts 3 parameters: 
// make (ex: Chevy, Ford, Toyota), model (ex: Camero, F150, Rav4), and year.

class car {
    constructor (make, model, year) {
        this.make = Ford;
        this.model = Taurus;
        this.year = 2004;
    }
}


// 2. Car should also include a method, .describe which simply returns 
// "This is a YEAR MODEL, made by MAKE." replacing YEAR, MODEL and MAKE with the correct information from the Car object. 

// 3. Create 4 cars (with any make, model and year) and push them all to a new array called allCars

// 4. Write a function with a single parameter car that, when called, will console.log the Car.describe method for the car used in the parameter. 

// 5. Loop through allCars and call the function to log each car's describe method to the console one by one. 