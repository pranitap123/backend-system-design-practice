/* ================================
   UNION TYPES
   ================================

   A union type allows a variable to hold
   multiple possible types.
*/

type SumInput = string | number;

function sum(a: SumInput, b: SumInput) {
  // example logic
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return a.toString() + b.toString();
}


/* ================================
   INTERSECTION TYPES
   ================================
*/


// renamed to avoid collision
interface ManagerInfo {
  name: string;
  age: number;

  // optional address
  address?: {
    city?: string;
    country?: string;
    pincode: number;
  };
}

interface EmployeeInfo {
  name: string;
  department: string;
}


// intersection type
type TeamLead = ManagerInfo & EmployeeInfo;


// object implementing TeamLead
let t: TeamLead = {
  name: "Pranita",
  age: 22,
  department: "CSE"
};