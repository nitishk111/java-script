const a=' '

if(a){
    console.log("a contains a truthy value");
}else{
    console.log("a contains a falsy value");
}

/*
=> falsy values
-> false
-> 0
-> -0
-> 0n
-> "",'',``
-> null
-> undefined
-> NaN

Everything else is truthy value
=> surprising truthy values
-> "0"
-> "false"
-> []
-> {}
-> function(){}
-> " " (a string with a space character)
*/

/*
=> Nullish coalescing operator (??)
-> It returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
-> It is useful for providing default values when dealing with potentially null or undefined variables.

Example:
let name = null;
let defaultName = "Guest";
let finalName = name ?? defaultName; // finalName will be "Guest"
finalName = name || defaultName; // finalName will be "Guest"

name = "Alice";
finalName = null ?? defaultName ?? "No name"; // finalName will be "Guest"

let age = 0;
let defaultAge = 18;
let finalAge = age ?? defaultAge; // finalAge will be 0, because 0 is not null or undefined
*/