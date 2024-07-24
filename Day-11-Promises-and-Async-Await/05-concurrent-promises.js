// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const createPromise = (response, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response);
        }, delay);
    });
};

const promise1 = createPromise("Promise 1 resolved", 2000);
const promise2 = createPromise("Promise 2 resolved", 1000);
const promise3 = createPromise("Promise 3 resolved", 1500);

Promise.all([promise1, promise2, promise3]).then((values) =>
    console.log(values)
);

// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3]).then((value) =>
    console.log(value)
);
