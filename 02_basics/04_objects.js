const user= new Object(); //Singleton Object
user.id=1;
user.name="John";
user.age=23;
user.email="Johny@mail";

const user2 ={
    id:2,
    fullName:{
        userFullName:{
            firstName:"John",
            lastName:"Doe"
        }
    }
}
console.log(user2.fullName.userFullName.firstName) //accessing nested object property
console.log(user2.age?.userFullName.firstName) //undefined, optional chaining to prevent error if property doesn't exist
Object.assign(user,{location:"India",age:24}) //merging two objects, if the key already exists, it will be updated
console.log(user)
const user3=Object.assign({},user,user2) //merging multiple objects, properties from later objects will overwrite earlier ones if they have the same key

console.log({...user,...user2}) //using spread operator to merge two objects, properties from later objects will overwrite earlier ones if they have the same key

console.log(Object.keys(user3)) //returns an array of the object's own property names
console.log(Object.values(user3)) //returns an array of the object's own property values
console.log(Object.entries(user3)) //returns an array of the object's own key-value pairs as arrays

delete user3.email //deleting a property from the object
console.log(user3)

console.log(user.hasOwnProperty("name")) //to check if a property exists in the object, returns true or false
console.log("location" in user) //another way to check if a property exists in the object, returns true or false

