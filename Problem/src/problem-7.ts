// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

// solve :

class Car {
    make: string;
    model: string;
    manufacturingYear: number;
    constructor(make: string, model: string, manufacturingYear: number) {
        this.make = make,
            this.model = model,
            this.manufacturingYear = manufacturingYear
    }
}

function getCarAge(car: Car) {
    const currentYear = new Date().getFullYear()
    const carAge = currentYear - car.manufacturingYear;
    // console.log(carAge)
    return carAge
}

console.log(getCarAge({
    make: 'honda',
    model: 'sahf23',
    manufacturingYear: 2016,
}))
