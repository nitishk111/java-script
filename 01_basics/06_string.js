const name="John";
const greeting=`Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!

const stringNew=new String("Hello");
console.log(typeof stringNew); // Output: object (As stringNew is an object of String class)
console.log(stringNew); // Output: [String: 'Hello']
console.log(stringNew.length); // Output: 5 (String object has properties and methods)
console.log(stringNew.toUpperCase()); // Output: HELLO (String object has properties and methods)
stringNew.age=25; // Adding property to string object
console.log(stringNew.age); // Output: 25

console.log(typeof stringNew);
console.log(stringNew); // Output: [String: 'Hello'] { age: 25 }
console.log(stringNew.length); // Output: 5
console.log(stringNew.toUpperCase());   // Output: HELLO

// String methods
let str = "  Hello, World!  ";
console.log(str.length); // Output: 17
console.log(str.trim()); // Output: "Hello, World!"
console.log(str.toUpperCase()); // Output: "  HELLO, WORLD!  "
console.log(str.toLowerCase()); // Output: "  hello, world!  "
console.log(str.indexOf("World")); // Output: 9
console.log(str.slice(2, 7)); // Output: "Hello"
console.log(str.replace("World", "JavaScript")); // Output: "  Hello, JavaScript!  "
console.log(str.split(", ")); // Output: [ '  Hello', 'World!  ' ]

// Template literals
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`); // Output: Fifteen is 15 and not 20.

// Escape sequences
let text = "He said, \"Hello!\"\nHow are you?\tI am fine.";
console.log(text);
/*
Output:
He said, "Hello!"
How are you?	I am fine.
*/

// String comparison
console.log("apple" === "apple"); // true
console.log("apple" === "Apple"); // false (case-sensitive)
console.log("apple" > "banana"); // false (lexicographical order)
console.log("2" > "12"); // true (lexicographical order)
console.log("2" > 1); // true (string "2" is converted to number 2 and then comparison is done) 