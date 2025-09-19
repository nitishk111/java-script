function add(n,m){
    return n+m;
}
add.isAdding = true // function is object, can have properties
console.log(add.isAdding);
console.log(add.prototype); // Empty {}

function createUser(userName, age){
    this.userName= userName
    this.age=age
}
createUser.prototype.increaseAge = function(){
    this.age++
}
createUser.prototype.print = function(){
    console.log(`user's name is ${this.userName}`);
}
const u1= new createUser("Nitish", 20)
const u2= new createUser("NKC", 23)

u1.print()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/