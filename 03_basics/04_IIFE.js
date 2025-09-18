// Immedietly Invoked Function Expression (IIFE)
// need -- to create a new scope
//       -- to avoid polluting global scope
//       -- to execute code immediately

// Basic IIFE
(function(){
    console.log("IIFE executed")
})(); // semicolon is important here if the previous line does not end with a semicolon, it tells that function execution ends here

// IIFE with parameters
(function(x, y){
    console.log("Sum from IIFE:", x + y)
})(5, 10);

((x, y) => { //unnamed arrow function IIFE
    console.log("Sum from Arrow IIFE:", x + y)
})(7, 8);

(function namedIIFE(){
    console.log("Named IIFE executed")
})();
// namedIIFE(); // Error: namedIIFE is not defined, named IIFE's name is not accessible outside its scope

// IIFE with return value
const result = (function(x, y){
    return x * y;
})(4, 6);
console.log("Product from IIFE:", result);