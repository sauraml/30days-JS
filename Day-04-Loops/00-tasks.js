// Activity 2: While Loop
// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let i = 10;

while (i > 0) {
    console.log(i);
    i--;
}

// Activity 3: Do...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do. ..while loop.

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

// Activity 5: Loop Control Statements

// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 7) break;
}
