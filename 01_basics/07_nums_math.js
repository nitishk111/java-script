const score = 100;
const scoreValue = 100.5;
console.log(typeof scoreValue); //number



const balance= new Number(500);
console.log(typeof balance); //object
console.log(balance); // [Number: 500] (Number object)
console.log(balance.valueOf()); //500 (primitive value of Number object)

// Number methods
let num = 123.456;
console.log(num.toFixed(2)); // Output: "123.46" (rounds to 2 decimal places)
console.log(num.toPrecision(4)); // Output: "123.5"  (formats to 4 significant digits)
console.log(num.toString()); // Output: "123.456" (converts number to string)
console.log(Number.isInteger(num)); // Output: false (checks if num is an integer)
console.log(Number.isNaN(NaN)); // Output: true (checks if value is NaN)
console.log(Number.parseFloat("123.45abc")); // Output: 123.45 (parses a string and returns a floating point number)
console.log(Number.parseInt("123abc")); // Output: 123 (parses a string and returns an integer)
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MAX_VALUE); //1.7976931348623157e+308

//Math methods
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045
console.log(Math.abs(-10)); //10
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.7)); //4
console.log(Math.round(4.5)); //5
console.log(Math.max(1, 3, 2)); //3
console.log(Math.min(1, 3, 2)); //1
console.log(Math.pow(2, 3)); //8
console.log(Math.sqrt(16)); //4
console.log(Math.random()); //random number between 0 and 1