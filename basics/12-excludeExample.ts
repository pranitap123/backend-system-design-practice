/* =====================================
   EXCLUDE UTILITY TYPE
   =====================================

   Exclude<T, U>

   Removes types from T that are assignable to U.

   In simple words:
   It filters unwanted types from a union.
*/


// union type
type UserRoles = "admin" | "user" | "guest";


// remove "guest" role
type AllowedRoles = Exclude<UserRoles, "guest">;


/*
AllowedRoles becomes:

"admin" | "user"
*/


// function that only accepts allowed roles
function assignRole(role: AllowedRoles) {
    console.log("Assigned role:", role);
}


// valid
assignRole("admin");

assignRole("user");


// ❌ Error (excluded type)
// assignRole("guest");