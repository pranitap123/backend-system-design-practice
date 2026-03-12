/* =====================================
   INTERFACE + CLASS IMPLEMENTATION
   + CLASS INHERITANCE (extends)
   //interfaces can be implemented as classes
   =====================================

   1️⃣ interface → defines structure
   2️⃣ implements → class must follow that structure
   3️⃣ extends → class inherits properties from another class
*/


// Interface defining structure of a person
interface People{
    name: string;      // person's name
    age: number;       // person's age

    // method that must be implemented by class
    isLegal(): boolean;
}


/*
Base class

This class will be inherited by other classes.
*/
class Person{
    createdAt: Date;

    constructor(){
        // store creation time of object
        this.createdAt = new Date();
    }
}


/*
Manager class

- extends Person → inherits properties from Person
- implements People → must follow People interface
*/
class Manager extends Person implements People{

    // properties required by interface
    name: string;
    age: number;

    // extra property specific to Manager
    number: string;

    constructor(name:string, age:number){

        // calling parent class constructor
        super();

        this.name = name;
        this.age = age;

        // additional property
        this.number = "123456789";
    }

    // implementing method from interface
    isLegal(): boolean {
        return this.age > 18;
    }
}


// Creating an object of Manager class
let manager = new Manager("Pranita", 22);


// accessing inherited property from Person
console.log(manager.createdAt);


// accessing class property
console.log(manager.age);


// calling method defined in interface
console.log(manager.isLegal());


