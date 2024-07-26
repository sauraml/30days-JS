// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const randomPromise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10 + 1);
    if (number < 5) {
        resolve(`${number} Random Promise Resolved`);
    } else {
        reject(`${number} Random Promise Rejected`);
    }
});

randomPromise
    .then((val) => console.log(val))
    .catch((error) => console.log("Error:", error));

// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleRandomPromise() {
    try {
        const response = await randomPromise;
        console.log(response);
    } catch (error) {
        console.error("Error:", error);
    }
}

handleRandomPromise();
