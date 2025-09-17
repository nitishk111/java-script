const studentId= 24423;
let studentEmail= "student@mail.com";
var studentPassword= "233erw"; // no block/functional scope; can change data in duplicate variable name from diff block.
studentCity = "Kanpur"; //works, but not preferred
let studentState; //Undefined

// studentId=90; Constant variables cant be modified

console.log(typeof(studentCity))
console.table([studentId, studentEmail, studentPassword, studentCity, studentState])