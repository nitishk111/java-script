add(3,4) // function declaration can be called before its definition due to hoisting
// sum(3,4) // TypeError: sum is not a function because function expressions are not hoisted
function add(x, y) { // function declaration
    return x + y;
}

sum= function(x, y) {  // function expression
    return x + y;
}   
console.log(add(2,3))
console.log(sum(5,6))

// Arrow function
const multiply = (x, y) => x * y;

console.log(multiply(4,5))

// Function as first class citizens
function operateOnTwoNumbers(x, y, operation) {
    return operation(x, y);
}

console.log(operateOnTwoNumbers(10, 20, add)) // passing function as argument
console.log(operateOnTwoNumbers(10, 20, multiply)) // passing function as argument