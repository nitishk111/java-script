let date= new Date();
console.log(date); // Current date and time
console.log(typeof date); //object
console.log(date.toString()); // Current date and time in string format
console.log(date.toDateString()); // Current date in string format
console.log(date.toTimeString()); // Current time in string format
console.log(date.toISOString()); // Current date and time in ISO format
console.log(date.getTime()); // Current timestamp (milliseconds since Jan 1, 1970)

let specificDate= new Date("2023-01-01");
console.log(specificDate); // Output: 2023-01-01T00:00:00.000Z (or equivalent in your timezone)

let specificDateTime= new Date("2023-01-01T10:30:00");
console.log(specificDateTime); // Output: 2023-01-01T10:30:00.000Z (or equivalent in your timezone)

console.log(date.getFullYear()); // Current year
console.log(date.getMonth()); // Current month (0-11)
console.log(date.getDate()); // Current day of the month (1-31)
console.log(date.getHours()); // Current hour (0-23)
console.log(date.getMinutes()); // Current minutes (0-59)
console.log(date.getSeconds()); // Current seconds (0-59)

date.setFullYear(2024);
console.log(date.getFullYear()); // Output: 2024

date.setMonth(11);