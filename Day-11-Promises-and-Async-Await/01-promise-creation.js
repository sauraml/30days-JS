// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved...");
    }, 2000);
});

resolvedPromise.then((val) => console.log(val));

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() .
const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve("Promise 2 resolved...");
        } else {
            reject("Something went wrong...");
        }
    }, 2000);
});

rejectedPromise
    .then((val) => console.log(val))
    .catch((error) => console.log(error));
