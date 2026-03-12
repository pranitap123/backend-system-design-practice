/* =====================================
   UNION TYPE EXAMPLE
   =====================================

   A union type allows a variable to be
   one of multiple types.

   Example:
   User | Admin

   The function can accept either a User
   object or an Admin object.
*/

/*
interface Admin{
    name: string;
    permission: string;
}

interface User{
    name: string;
    age: number;
}

type UserOrAdmin = User | Admin;


// function that accepts either User or Admin
function greet(user: UserOrAdmin){

    // both User and Admin contain "name"
    // so we can safely access it
    console.log(user.name);
}
*/


/* =====================================
   ARRAYS IN TYPESCRIPT
   =====================================

   number[] → array of numbers

   This function finds the maximum value
   from a given number array.
*/

/* =====================================
   FIND MAX VALUE IN ARRAY
   =====================================

   This function takes an array of numbers
   and returns the largest number.
*/

function getMax(nums: number[]): number {

    // check if array is empty
    if (nums.length === 0) {
        throw new Error("Array cannot be empty");
    }

    // initialize maxValue with first element
    let maxValue = nums[0]!;

    // iterate through the array
    for (let i = 1; i < nums.length; i++) {

        // compare current number with maxValue
        if (nums[i]! > maxValue) {

            // update maxValue
            maxValue = nums[i]!;
        }
    }

    // return largest value
    return maxValue;
}


// example usage
let result = getMax([3, 7, 2, 9, 4]);

console.log(result);