const arr=[1,2,3,'Hello',true];
console.log(arr);
console.log(arr[3]); // Accessing elements
arr[1]=20; // Modifying elements
console.log(arr);
console.log(arr.length); // Length of the array

arr.push('World'); // Adding elements
console.log(arr);
arr.pop(); // Removing last element
console.log(arr);
arr.shift(); // Removing first element
console.log(arr);
arr.unshift(0); // Adding element at the beginning
console.log(arr);

const subArray=arr.slice(1,4);  // Slicing array
console.log(subArray);   // Note: end index is exclusive
const index=arr.indexOf('Hello');
console.log(index);

arr.splice(index,1,'JavaScript'); // Removing and adding elements; splice removes 'Hello' and adds 'JavaScript', last index in inclusive, if third parameter is not given, it just removes and returns the removed elements
console.log(arr);   // Replacing 'Hello' with 'JavaScript'
arr.splice(2,0,'New Element'); // Adding without removing
console.log(arr);

const joined=arr.join(' - '); // Joining elements into a string
console.log(joined);
const numbers=[5,3,8,1,2];
numbers.sort((a,b)=>a-b);
console.log(numbers);
const mapped=numbers.map(x=>x*2);
console.log(mapped);
const filtered=numbers.filter(x=>x>3);
console.log(filtered);
const sum=numbers.reduce((acc,x)=>acc+x,0);
console.log(sum);   