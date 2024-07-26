// Activity 1: Basic Error Handling with Try-Catch

// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
    throw new Error("Intentional Error");
}

try {
    throwError();
} catch (error) {
    console.log("Error Occurred:", error.message);
}

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by Zero");
    }
    return num1 / num2;
}

try {
    let result = divide(10, 2);
    console.log(result);
} catch (error) {
    console.log("Error Occurred:", error.message);
}

// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("This is try block");
    throw new Error("Intentional Error");
} catch (error) {
    console.log("This is catch block:", error.message);
} finally {
    console.log("This is finally block");
}
