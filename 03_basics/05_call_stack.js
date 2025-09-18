function one() {
  console.log("Inside one");
  two();
  console.log("Again inside one");
}   
function two() {
  console.log("Inside two");
  three();
  console.log("Again inside two");
}   
function three() {
  console.log("Inside three");
}   
one();
console.log("Inside global context");

// Call Stack
// The call stack is a data structure that keeps track of function calls in a program. It operates in a Last In, First Out (LIFO) manner, meaning the last function called is the first one to complete and return control to the previous function. Each time a function is invoked, a new frame is added to the top of the stack, and when the function completes, its frame is removed from the stack.


// Java Script Execution Context
// In JavaScript, an execution context is an abstract concept that holds information about the environment within which the current code is being executed. There are three main types of execution contexts: Global Execution Context, Function Execution Context, and Eval Execution Context. The most commonly used are the Global and Function Execution Contexts.

// Global Execution Context
// This is the default or base context where your JavaScript code runs when it is first loaded. It creates a global object (like `window` in browsers) and a special object called `this`. Variables and functions declared in the global scope become properties of the global object.

// Function Execution Context
// Each time a function is invoked, a new execution context is created for that function. This context contains the function's arguments, local variables, and the value of `this` specific to that function. When the function completes, its execution context is popped off the stack, and control returns to the previous context.

// Eval Execution Context
// This context is created by the `eval` function, which executes a string of JavaScript code. However, its use is generally discouraged due to security and performance concerns.
function sum(a, b) {
  return a + b;
}

let a=9
let b=8
let result = sum(a, b);
console.log(result);

/*
A. Memory creation phase
-> Global Execution Context is created and pushed onto the call stack.
-> Memory space is allocated for variables and functions in the global scope. variables hold undefined initially.
B. Execution phase
-> The code is executed line by line.
-> When the function `sum` is called, a new Function Execution Context is created and pushed onto the call stack.
C. Again Memory creation phase for sum function
-> Memory space is allocated for the parameters `a` and `b` of the function `sum`.
D. Execution phase for sum function
-> The function body is executed, and the result is returned.
-> The Function Execution Context for `sum` is popped off the call stack, returning control to the Global Execution Context.
-> The final result is logged to the console.

*/