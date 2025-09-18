// for of loops
let colors = ['red', 'blue', 'green'];
for (let color of colors) {
  console.log(color);
}

// for in loops
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) { //works on objects, for arrays, keys are the indices
  console.log(key + ': ' + person[key]);
}

let map1 = new Map();   //map is not an object, it's a collection of key-value pairs; it is not iterable
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

for (let [key, value] of map1) {
  console.log(key + ': ' + value);
}

let set1 = new Set([1, 2, 3, 4, 5]);
for (let value of set1) {
  console.log(value);
}

// forEach method
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
numbers.forEach(number => console.log(number)); //using arrow function
numbers.forEach((number, index) => console.log(index + ': ' + number)); //with index
numbers.forEach((number, index, arr) => console.log(arr)); //with array

// map method
let doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled);

// filter method
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);

// reduce method
let sum = numbers.reduce(function(total, number) {
  return total + number;
}, 0); // 0 is the initial accumulator value, used only first time, later total is the accumulated value
console.log(sum);
sum=numbers.reduse((total, num)=>total_num, 0); //using arrow function

// some method
let hasEven = numbers.some(function(number) { //checks if at least one element passes the test, returns true or false
  return number % 2 === 0;
});
console.log(hasEven);

// every method
let allEven = numbers.every(function(number) { //checks if all elements pass the test, returns true or false
  return number % 2 === 0;
});
console.log(allEven);

// find method
let firstEven = numbers.find(function(number) { //returns the first element that passes the test, otherwise undefined
  return number % 2 === 0;
});
console.log(firstEven);

// findIndex method
let firstEvenIndex = numbers.findIndex(function(number) { //returns the index of the first element that passes the test, otherwise -1
  return number % 2 === 0;
});
console.log(firstEvenIndex);

// flatMap method
let nested = [[1, 2], [3, 4], [5]];
let flattened = nested.flatMap(function(arr) { //maps each element and flattens the result into a new array, here it just returns the same array
  return arr;
});
console.log(flattened);

// for await...of loop (for asynchronous iteration)
async function fetchData() { //simulating fetching data from an API
  let urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];

  for await (let url of urls) { //works only in async functions, awaits for each promise to resolve
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }
}

fetchData();    