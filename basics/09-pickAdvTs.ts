/* =====================================
   PICK UTILITY TYPE IN TYPESCRIPT
   =====================================

   Pick<T, K> is a utility type that
   selects specific properties from a type.

   Useful when you only need some fields
   from a larger object.
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
For profile display we only need:
- name
- age
- email

Pick<User1, 'name' | 'age' | 'email'>
creates a new type with only these fields
*/
type UserProfile = Pick<User1, 'name' | 'age' | 'email'>;


/*
Function to display user profile.

Parameter type is UserProfile,
so only the selected fields are allowed.
*/
const displayUserProfile = (user: UserProfile) => {

    // printing user profile details
    console.log(
        "Name: " + user.name,
        "Age: " + user.age,
        "Email: " + user.email
    );
};


// Example usage
const userProfileData: UserProfile = {
    name: "Pranita",
    age: "22",
    email: "pranita@email.com"
};


// calling function
displayUserProfile(userProfileData);