let score= "66abc"

console.log(typeof score)
let value = Number(score)
console.log(typeof value) 
console.log(value) //As score can not be converted to number, value is NaN, but still type is number;

/*
=> string to number type conversion-->
"33" -> 33 number
"33sdd" -> NaN number
true -> 1 number
false -> 0 number
null -> 0 number
undefined -> NaN number

=> number, string to boolean
1 -> true
0 -> false
"" -> false
"abc" -> true

=> number to string
33 -> "33" string
*/

/*
=> Operations
"1" + 2 -> "12" string
1 + "2" -> "12" string
1 + 2 + "3" -> "33" string
"1" + 2 + 3 -> "123" string
"4" - 2 -> 2 number
4 - "2" -> 2 number
"4" * 2 -> 8 number
4 * "2" -> 8 number
"4" / 2 -> 2 number
4 / "2" -> 2 number
"4" / "2" -> 2 number

+true -> 1 number
+false -> 0 number
+"" -> 0 number
+null -> 0 number
+undefined -> NaN number

*/