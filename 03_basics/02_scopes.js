let a=10 //// declared in outer scope (global or function scope)
const b=20 // same as above
var c=30

// const b=40 // SyntaxError: Identifier 'b' has already been declared
// let a=50 // SyntaxError: Identifier 'a' has already been declared
// var c=60 // No error, var allows redeclaration


if(true){
    // console.log(a,b,c) //  a and b are not accessible here as they are redeclared in this block scope below
    let a=100 // block scope
    const b=200 // block scope
    var c=300 // function scope
    d=900 // global scope (if not in strict mode)
    console.log([a,b,c])
    
    if (true){
        console.log(a,b,c)   // can access outer scope variables, child blocks can access parent block variables
    }
}

console.log(a,b,c,d) // d is accessible here because it was declared without var, let or const in the block above