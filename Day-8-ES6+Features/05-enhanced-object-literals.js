// Activity 5: Enhanced Object Literals

// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const username = "Rahul";
const age = 26;
const password = "123456789";

const user = {
    username,
    age,
    password,
    sayHello() {
        console.log(
            `Hey it's ${this.username} here and I'm ${this.age} years old`
        );
    },
};

console.log(user);
user.sayHello();

// • Task 9: Create an object with computed property names based on variables and log the object to the console.
let i = 0;

const num = {
    [`foo${++i}`]: i,
    [`foo${++i}`]: i,
    [`foo${++i}`]: i,
};

console.log(num.foo1);
console.log(num.foo2);
console.log(num.foo3);
