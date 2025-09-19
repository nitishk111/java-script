// Object literal --> object
const user = {
  userName: "Nitish",
  age: 23,
  isPerson: true,
  getDetail: function () {
    if (this.isPerson) console.log(this.userName, this.age);
  },
};
user.getDetail();

// Object --> with new keyword.
function users(name, age){
    this.name=name
    this.age=age

    this.greet= function(){
        console.log(`Hello ${this.name}`);
    }
    return this
}
let userOne = new users("Nitish", 23) 
let usertwo = new users("Nitish chaudhary", 13) 
userOne.greet()
usertwo.greet()
console.log(userOne, usertwo);
