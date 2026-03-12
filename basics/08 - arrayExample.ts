/* =====================================
   FILTER USERS BY AGE
   =====================================

   This function filters users whose
   age is greater than 18.
*/


// defining a new interface
interface PersonUser {
    firstName: string;
    lastName: string;
    age: number;
}


// function that filters adult users
function filterUsers(users: PersonUser[]): PersonUser[] {

    // array to store result
    let ans: PersonUser[] = [];

    // iterate through users
    for(let i = 0; i < users.length; i++){

        // check age condition
        if(users[i]!.age > 18){

            // add to result array
            ans.push(users[i]!);
        }
    }

    return ans;
}


// example usage
const users = [
    { firstName: "Pranita", lastName: "Panchal", age: 22 },
    { firstName: "Rahul", lastName: "Sharma", age: 17 },
    { firstName: "Amit", lastName: "Patel", age: 25 }
];


// calling function
console.log(filterUsers(users));