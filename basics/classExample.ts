/* =====================================
   INTERFACE + CLASS IMPLEMENTATION
   =====================================

   An interface defines the structure that
   a class must follow.

   When a class "implements" an interface,
   it must include all properties defined
   in that interface.
*/


// Interface defining the structure of a person
interface People{
    name: string;  // person's name
    age: number;   // person's age
}


/*
Manager class implementing People interface.

This means the class MUST contain:
- name
- age
*/
class Manager implements People{

    // properties required by the interface
    name: string;
    age: number;

    // additional property specific to Manager
    number: string;

    // constructor initializes the object
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;

        // extra property not defined in interface
        this.number = "123456789";
    }
}


// Creating an object of Manager class
let manager = new Manager("Pranita", 22);


// accessing property
console.log(manager.age);