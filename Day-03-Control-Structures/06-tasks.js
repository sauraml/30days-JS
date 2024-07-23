// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
x = 5545;
y = 625;
z = 89;

if (x > y) {
    if (x > z) {
        console.log(`${x} is largest`);
    } else {
        console.log(`${z} is largest`);
    }
} else {
    if (y > z) {
        console.log(`${y} is largest`);
    } else {
        console.log(`${z} is largest`);
    }
}

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num = 1;

let res = num % 2 == 0 ? "Even" : "Odd";
console.log("Number is", res);
