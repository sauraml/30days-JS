// Activity 3: Using Async/Await

// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const getValue = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Resolved...");
        }, 2000);
    });
};

const logResolve = async () => {
    const result = await getValue();
    console.log(result);
};

logResolve();

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve("Promise Resolved");
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 2000);
});

async function handleRejectedPromise() {
    try {
        const response = await promise;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

handleRejectedPromise();
