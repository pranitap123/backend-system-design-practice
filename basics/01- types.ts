/* ================================
   UNION TYPES
   ================================

   A union type allows a variable to hold
   multiple possible types.

   Example: string | number

   The variable can be either string OR number.
*/

type sumInput = string | number;

/*
Function that accepts parameters which can be
either string or number.

Union is useful when a function can accept
multiple input types.
*/

function sum(a: sumInput, b: sumInput){
    // logic can be added using type checking
}



/* ================================
   INTERSECTION TYPES
   ================================

   Intersection combines multiple types
   into ONE type.

   Example: A & B

   The resulting type must contain
   ALL properties from both types.
*/


// Manager interface
interface Manager{
    name: string,
    age: number
}


// Employee interface
interface Employee{
    name: string,
    department: string
}


/*
TeamLead is an intersection of Manager and Employee.

So TeamLead must contain:
- name
- age
- department
*/

type TeamLead = Manager & Employee


// Object implementing TeamLead
let t: TeamLead = {
    name: "Pranita",
    age: 22,
    department: "CSE"
}


/*
Summary for revision:

Union ( | )
→ One of multiple types

Example:
string | number

Intersection ( & )
→ Combination of multiple types

Example:
Manager & Employee
*/