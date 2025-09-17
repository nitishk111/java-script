const marvel_heros=["Spiderman","Ironman","Hulk","Thor"]
const dc_heros=new Array("Superman","Batman","Wonderwoman")

console.log(marvel_heros.concat(dc_heros)) //merging two arrays
console.log(...dc_heros, ...marvel_heros) //using spread operator to merge two arrays

const arr=[[23,45,67],[43,56,78],[12,34,56]] //2D array
console.log(arr.flat()) //flattening the array, returns a single array with all the elements of the sub-arrays. flat() takes an optional argument that specifies the depth level to which the array should be flattened. The default is 1.

console.log(Array.isArray(marvel_heros)) //to check if a variable is an array or not
console.log(Array.from("ABCDEFG")) //creates an array from a string or any iterable object
console.log(Array.from({name:"Harry",age:24})) //creates an array from an object with iterable properties. this will return an empty array as the object is not iterable

