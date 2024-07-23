// Activity 1 -> Varaible Declaration

// Task 1 -> Declare variable using var
var speed = 1000;
console.log(speed);

// Task 2 -> Declare varialbe using let
let myName = "Saurabh";
console.log(myName);

// Activity 2 -> Constant Declaration

// Task 3 -> Declare a constant using const
const isLoggedIN = false;
console.log(isLoggedIN);

// Activity 3 -> Data Types

// Task 4 -> Create variables of different data types and log their datatypes using typeof
let distance = 240;
let city = "Delhi";
let isRaining = false;
let user = {
  username: "Ramesh",
  password: "123456",
  age: 25,
};
let hashiras = [
  "Sanemi Shinazugawa",
  "Giyu Tomioka",
  "Mitsuri Kanroji",
  "Gyomei Himejima",
  "Shinobu Kocho",
];

console.log(typeof distance);
console.log(typeof city);
console.log(typeof isRaining);
console.log(typeof user);
console.log(typeof hashiras);

// Activity 4 -> Reassigning variables

// Task 5 -> Declare variable using let and log its initial and reassigned value
let temperature = 36;
console.log("Initial value of temperature: ", temperature);

temperature = 42;
console.log("Reassigned value of temperature: ", temperature);

// Activity 5 -> Understanding const

// Task 6 -> Try reassigning value to a const
const pi = 3.14159;
console.log("Initial value of pi: ", pi);

pi = 4;
console.log("Reassigned value of pi: ", pi);
// TypeError: Assignment to constant variable
