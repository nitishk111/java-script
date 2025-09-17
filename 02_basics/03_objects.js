// Object Declaration
// 1. Sinleton Object


// 2. Object literal syntax
let user1 = {}; //empty object
let user2 = { 
    name: "Alice" , 
    "full name": "Alice Wonderland",
    age:22, 
    location: "Patna", 
    email:"A@mail.com"
}; // keys are strings, to access keys with spaces or special characters, use bracket notation
console.log(user2.email); //accessing property using dot notation
console.log(user2["location"], user2["full name"]); //accessing property using bracket notation

user2.greeting = function() { //adding method to the object
    console.log(`Hello, my name is ${this.name} and i am from ${this.location}`); //using 'this' to refer to the current object
}
console.log(user2.greeting); //returns function refrence, [Function (Anonymous)]
user2.greeting(); //calling the method


Object.freeze(user2) //freezing the object to prevent any changes to its properties