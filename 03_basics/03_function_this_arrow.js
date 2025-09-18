
const user = {
    name: 'Alice',
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    // Arrow function does not have its own 'this', it uses 'this' from the surrounding context
    arrowGreet: () => {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);      // 'this' here does not refer to the user object, hence undefined
    }
};

user.greet(); // Works as expected
user.arrowGreet(); // 'this' is not what we expect here
// To fix the arrow function issue, we can use a regular function or bind 'this'
const boundArrowGreet = user.arrowGreet.bind(user);
boundArrowGreet(); // Now 'this' refers to the user object

console.log(this) // In global context, 'this' refers to the global object (window in browsers, global in Node.js), returns {} in modules

function showThis() {
    console.log(this); // In non-strict mode, 'this' refers to the global object. In strict mode, it's undefined.
}
showThis();

const obj = () => {
    console.log(this); // 'this' here refers to the surrounding context, which is the global object in this case
};
obj();


const obj2 = x => x*6; // wrap inside parentheses if returning an object literal, not in braces, as that would be treated as a function body and return is explicitly needed
console.log(obj2(4)) // 24