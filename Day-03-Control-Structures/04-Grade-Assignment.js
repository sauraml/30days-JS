// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D, 'F) based on a score and log the grade to the console.

let grade;
let score = 64;

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score < 90 && score >= 75:
        grade = "B";
        break;
    case score < 75 && score >= 50:
        grade = "C";
        break;
    case score < 50 && score >= 30:
        grade = "D";
        break;
    case score < 30:
        grade = "F";
        break;
}

console.log(`Your grade is ${grade}`);
