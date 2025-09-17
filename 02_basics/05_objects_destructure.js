const course={
    title:"JavaScript - The Complete Guide",
    rating:5,
    students:30000,
    price:99.99,
    instructor:{
        firstName:"Max",
        lastName:"Schwarzmüller"
    }
};

const {title,price:rate,rating,instructor:{firstName}}=course; //destructuring the object to extract properties into variables
const {instructor:{lastName}}=course; //nested destructuring to extract nested object property into variable
console.log(lastName);
console.log(rate);

