// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const max = function (x, y) {
    return x > y ? x : y;
};

const x = -2;
const y = 0;
const maxNum = max(x, y);
console.log(`Maximum of ${x} and ${y} is ${maxNum}`);

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const isPresent = (ch, str) => str.indexOf(ch) > -1;
console.log(isPresent("t", "Javascript"));

// Activity 4: Function Parameters and Default Values
// . Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const product = (a, b = 1) => a * b;
console.log(product(100, 2));

// . Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greeting = (name, age = 18) => `Hello ${name}, your age is ${age}`;
console.log(greeting("Hitesh", 24));

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to
// the result.

const square = (a) => a ** 2;
const half = (a) => a / 2;

const squareHalf = (fn1, fn2, val) => {
    let a = fn1(val);
    let b = fn2(a);
    return b;
};

// const squareHalf = (fn1, fn2, val) => fn2(fn1(val));

console.log(squareHalf(half, square, 16));
