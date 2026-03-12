/* ===================================
   INTERFACE IN TYPESCRIPT
   ===================================

   An interface is used to define the
   structure (shape) of an object.

   It specifies what properties an
   object should contain and their types.

   Think of it as a blueprint for objects.
*/

interface UserExample {
    firstName: string,   // user's first name (must be string)
    lastName: string,    // user's last name (must be string)
    email: string,       // user's email (must be string)
    age: number          // user's age (must be number)
}


/*
This function accepts an object of type "User".

Because we used the interface, TypeScript
ensures the object passed to this function
must contain all properties defined in User.
*/

function isLegalTest(user: UserExample){

    // Accessing property from the User object
    if(user.age > 18){
        return true
    }
    else{
        return false;
    }
}


/*
Example usage:

let user1: User = {
    firstName: "Pranita",
    lastName: "Panchal",
    email: "pranita@email.com",
    age: 22
}

isLegalTest(user1)

TypeScript will give an error if:
- a property is missing
- a property has the wrong type
*/