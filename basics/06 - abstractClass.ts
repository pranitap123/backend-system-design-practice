/* =====================================
   ABSTRACT CLASS EXAMPLE
   =====================================

   Abstract classes cannot be instantiated directly.
   They are meant to be extended by other classes.

   They can contain:
   1. Properties
   2. Normal methods
   3. Abstract methods
*/


// Interface defining structure
interface People{
    name: string;
    age: number;
    isLegal(): boolean;
}


/*
Abstract base class

Cannot create object directly.
Used only as a parent class.
*/
abstract class BasePerson{

    createdAt: Date;

    constructor(){
        this.createdAt = new Date();
    }

    // abstract method → must be implemented by child class
    abstract getRole(): string;
}


/*
Manager class

extends BasePerson → inherits properties
implements People → must follow People interface
*/
class ManagerWithRole extends BasePerson implements People{

    name: string;
    age: number;
    number: string;

    constructor(name:string, age:number){
        super();

        this.name = name;
        this.age = age;
        this.number = "123456789";
    }

    // interface method
    isLegal(): boolean {
        return this.age > 18;
    }

    // abstract method implementation
    getRole(): string {
        return "Manager";
    }
}


// create object
let manager2 = new ManagerWithRole("Pranita", 22);


// inherited property
console.log(manager2.createdAt);


// interface method
console.log(manager2.isLegal());


// abstract method
console.log(manager2.getRole());