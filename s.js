// Inheritance
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}
class Square extends Rectangle {    //Inherit from Rectangle
    constructor(size) {
        super(size, size)    //This will apply this.width = size & this.height = size
    }
}
const rect1 = new Rectangle(10, 20)
const square1 = new Square(10)
console.log(square1.area())
console.log(square1.size)


class Person {
    constructor(name, age, location) {
    this.name = name
    this.age = age
    this.location = location
    }
    sayHello() {console.log(`Hi, my name is ${this.name}`)}
}


class Student extends Person{
    constructor(name, age, location, studentId) {
    super(name,age,location)
    this.studentId = studentId
    }
    study() {console.log("I'm learning more every day!")}
}

class Educator extends Person {
    constructor(name, age, location, wage) {
    super(name,age,location)
    this.wage = wage
    }
    work() {console.log("I have the best job in the world!")}
}


//Methods
class Dog {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
        this.allWalks = []
        this.allDistance = 0
    }
    speak() {console.log("Woof! My name is [name]")}
    walk(location, distance) {
        this.allWalks.push({l: location, d: distance})
        this.allDistance += distance
    }
    displayWalks() {
        this.allWalks.forEach((a) => {
            console.log(`${a.l}, ${a.d}km`)
        })
        for (let i of this.allWalks) {
            console.log(`${i.l}, ${i.d}km`)
        }
    } 
    totalDistance() {
        console.log(`${this.name} has walked ${this.allDistance}km`)
    }
}

let a = new Dog('sdf', 'xcxx')
a.walk('xfv', 33)
a.walk('xazvfv', 13)
a.displayWalks()
a.totalDistance()


// Static property
class Shape {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}

Shape.measurement = "cm" //Static property
let sh = new Shape(1, 5)
console.log(sh.measurement) // ==> outputs undefined
console.log(Shape.measurement) // ==> outputs "cm"


// Static method
class Application {
    static version() {
        return "3.8.14"
    }
}

console.log(Application.version())   //  ==> outputs "3.8.14"
