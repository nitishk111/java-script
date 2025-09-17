//Comparison Operators in JavaScript
//There are two types of comparison operators in JavaScript:
//1. Equality operators(==, !=)
//2. Strict equality operators(===, !==)

//Equality operator(==) and inequality operator(!=)

console.log("abc" > "abd") //false, comparison is done based on unicode value of characters.
console.log("a" > "A") //true, unicode value of a is greater than A.
console.log("abcd" > "ab") //true, comparison is done character by character, if all characters are same in both strings then the string with more characters is greater.

console.log("2" > 1) //true, string "2" is converted to number 2 and then comparison is done.
console.log("01" == 1) //true, string "01" is converted to number 1 and then comparison is done.
console.log(true == 1) //true, true is converted to number 1 and then comparison is done.

console.log(null == undefined) //true, null and undefined are equal only to themselves and each other.
console.log(null == 0) //false
console.log(undefined == 0) //false
console.log(null > 0) //false
console.log(null >= 0) //true, null is converted to 0 and then comparison is done.
console.log(undefined > 0) //false, undefined is converted to NaN and any comparison with NaN is false.

console.log(NaN == NaN) //false, NaN is not equal to anything including itself.

//Strict equality operator(===) and strict inequality operator(!==)
console.log(3 === 3) //true

console.log(null === undefined) //false, as data types are different.

//Object.is() method
console.log(Object.is(3, 3)) //true
console.log(Object.is(3, "3")) //false, as data types are different.
console.log(Object.is(NaN, NaN)) //true, Object.is() method considers NaN to be equal to itself.
console.log(Object.is(+0, -0)) //false, Object.is() method considers +0 and -0 to be different.
console.log(+0 === -0) //true, strict equality operator considers +0 and -0 to be equal.
console.log(+0 == -0) //true, equality operator considers +0 and -0 to be equal.

//Summary-->
/*
1. Use strict equality operator(===) and strict inequality operator(!==) to avoid type conversion during comparison.
2. Use Object.is() method when you want to consider NaN to be equal to itself and +0 and -0 to be different.
*/

//Note: In all the above comparisons, if the data types of the values being compared are different, type conversion is done to make them of same type and then comparison is done. This can lead to unexpected results. To avoid this, use strict equality operator(===) and strict inequality operator(!==) which do not perform type conversion.

/*
Type conversion during comparison-->
1. If one of the values is string and the other is number, the string is converted to number.
2. If one of the values is boolean, it is converted to number.
3. If one of the values is null, it is converted to 0.
4. If one of the values is undefined, it is converted to NaN.
5. If both values are objects, they are converted to primitive values using valueOf() or toString() methods.
6. If one value is object and other is string or number, object is converted to primitive value using valueOf() or toString() methods.
*/

let obj1 = {
    valueOf: function() {
        return 5;
    }
}

let obj2 = {
    toString: function() {
        return "10";
    }
}

console.log(obj1 > 3) //true, obj1 is converted to primitive value 5 using valueOf() method and then comparison is done.

console.log(obj2 > 5) //true, obj2 is converted to primitive value "10" using toString() method, which is then converted to number 10 and then comparison is done.

//Note: If an object has both valueOf() and toString() methods, valueOf() method is preferred for conversion to primitive value during comparison.

//Important: Always be cautious while comparing values of different data types as type conversion can lead to unexpected results. It is always better to use strict equality operator(===) and strict inequality operator(!==) to avoid type conversion during comparison.

//End of file

//Additional Info: Type Conversion Reference
//This info is taken from 01_basics/03_conversionOperation.js file for reference.
//You can skip this if you have already seen that file.

//Type Conversion-->
//Explicit type conversion-->
//1. String() function
//2. Number() function
//3. Boolean() function
//4. toString() method
//5. parseInt() function
//6. parseFloat() function

