/* =====================================
   COMBINING RECORD AND MAP
   =====================================

   Record → used for fixed typed object structure
   Map → used for dynamic key-value storage

   Here:
   Record stores departments
   Map stores employees inside each department
*/


// structure of employee
interface Employee {
    name: string;
    age: number;
}


// Record where each department has a Map of employees
const company: Record<string, Map<string, Employee>> = {

    // Engineering department
    engineering: new Map<string, Employee>(),

    // HR department
    hr: new Map<string, Employee>()
};


// adding employees to engineering department
company.engineering!.set("emp1", {
    name: "Pranita",
    age: 22
});

company.engineering!.set("emp2", {
    name: "Rahul",
    age: 25
});


// adding employee to HR
company.hr!.set("emp3", {
    name: "Amit",
    age: 30
});


// retrieving employee
const emp = company.engineering!.get("emp1");

console.log(emp);