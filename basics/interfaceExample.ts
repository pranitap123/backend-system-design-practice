//here, we created an interface and created an object out of that interface

/* ======================================
   NESTED INTERFACES IN TYPESCRIPT
   ======================================

   Interfaces define the structure of objects.

   Sometimes an object contains another object.
   In such cases we use nested interfaces.

   Example:
   User → contains Address
*/


// Address interface defines the structure of an address object
interface Address {
    city: string,        // city name
    country: string,     // country name
    pincode: number,     // postal / zip code
    houseNumber: number  // house or building number
}


// User interface
// It contains basic user info + an Address object
interface User{
    name: string,      // user's name
    age: number,       // user's age

    // address must follow the structure defined in Address interface
    address: Address,

    // Interfaces can also define functions (methods)
    // This means any User object must implement this function
    greet: () => string;
}



// Office interface
// Office also uses the same Address structure
// This shows how interfaces help reuse data structures
interface Office{
    address: Address
}


/*
Creating a user object.

Important:
Since "User" requires:
- name
- age
- address
- greet()

we must provide all these properties.
*/

let user: User ={
    name: "Pranita",
    age: 22,

    // Nested object following Address interface
    address: {
        city: "Pune",
        country: "India",
        pincode: 411001,
        houseNumber: 101
    },

    // Implementing the greet function defined in the interface
    greet: () =>{
        return "hi";
    }
}


// Calling the greet function
// The return value will be stored in "greeting"
let greeting = user.greet();


// Print greeting in console
console.log(greeting);


/*
Example Office object using the same Address interface
*/

let office: Office = {
    address: {
        city: "Mumbai",
        country: "India",
        pincode: 400001,
        houseNumber: 20
    }
}


/*
Revision Summary

Interface
→ Defines structure of an object

Nested Interface
→ One interface used inside another

Interface Methods
→ Interfaces can also define functions
   that objects must implement


Example structure:

User
 ├─ name
 ├─ age
 ├─ address
 │     ├─ city
 │     ├─ country
 │     ├─ pincode
 │     └─ houseNumber
 └─ greet() → returns string
*/