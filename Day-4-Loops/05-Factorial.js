// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let fact = 1;
let i = 1;
let n = 5;

do {
    fact *= i;
    i++;
} while (i <= n);

console.log(`Factorial of ${n} is ${fact}`);
