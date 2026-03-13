/* =====================================
   TYPESCRIPT UTILITY TYPES
   Pick + Partial
   =====================================

   Pick<T, K>
   → Select specific properties from a type.

   Partial<T>
   → Makes all properties optional.

   These are commonly used in backend APIs
   when sending limited or update data.
*/


// Full user structure (for database or full profile)
interface User1{
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
}


/*
For profile display we only need:
- name
- age
- email

Pick<User1, 'name' | 'age' | 'email'>
creates a new type containing ONLY those fields.
*/
type UserProfile = Pick<User1, 'name' | 'age' | 'email'>;


/*
Partial<T>

Makes all fields optional.

Example use case:
Updating user profile where user may send
only one field instead of the entire object.
*/
type UpdateUserOptional = Partial<UserProfile>;


/*
Function to display user profile.

Since fields are optional (because of Partial),
we use optional chaining or fallback values.
*/
const displayUserProfile = (user: UpdateUserOptional) => {

    console.log(
        "Name:", user.name ?? "Not provided",
        "Age:", user.age ?? "Not provided",
        "Email:", user.email ?? "Not provided"
    );
};


// Example full profile
const userProfileData: UserProfile = {
    name: "Pranita",
    age: "22",
    email: "pranita@email.com"
};


// calling function
displayUserProfile(userProfileData);


/*
Example update object

User may update only one field.
*/
const updateData: UpdateUserOptional = {
    email: "newemail@email.com"
};


// displaying partial data
displayUserProfile(updateData);