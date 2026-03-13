/* =====================================
   READONLY IN TYPESCRIPT
   =====================================

   Readonly<T> utility type makes all
   properties of an object immutable
   (cannot be changed after creation).

   Useful for protecting important data.
*/


// Full user structure
interface User1{
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
}


/*
Using Readonly utility type

Now all properties of User1 become read-only.
They cannot be modified after the object
is created.
*/
type ReadonlyUser = Readonly<User1>;


// creating a readonly object
const user1:ReadonlyUser = {
    id: "1",
    name: "Pranita",
    age: "22",
    email: "pranita@email.com",
    password: "securepassword"
};


// reading values is allowed
console.log(user.name);


/*
Trying to modify a readonly property
will cause a TypeScript error
*/

// ❌ ERROR
// user.name = "New Name";



/* =====================================
   READONLY PROPERTY IN INTERFACE
   =====================================

   We can also make specific properties
   readonly directly inside interfaces.
*/

interface Product{
    readonly id: number;  // cannot change after creation
    name: string;
    price: number;
}


// creating product object
const product: Product = {
    id: 101,
    name: "Laptop",
    price: 50000
};


// allowed
product.price = 52000;


// ❌ not allowed
// product.id = 200;



/*
Summary

readonly property
→ prevents modification of specific field

Readonly<Type>
→ makes ALL properties immutable
*/