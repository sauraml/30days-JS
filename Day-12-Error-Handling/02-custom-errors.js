// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "Custom Error";
    }
}

function throwCustomError() {
    throw new CustomError("This is the custom error.");
}

try {
    throwCustomError();
} catch (error) {
    console.error("Caught a custom error: " + error.message);
}

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (input.trim() === "") {
        throw new ValidationError("Input field cannot be empty.");
    }
    return true;
}

try {
    let isValidated = validateInput("");
    console.log("User is validated.");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}
