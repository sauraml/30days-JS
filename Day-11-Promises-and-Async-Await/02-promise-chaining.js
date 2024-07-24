// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "sauraml", password: "123456789" });
        } else {
            reject("ERROR: Something went wrong....");
        }
    }, 2000);
});

promise
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => console.log(`Username: ${username}`))
    .catch((error) => console.log(error))
    .finally(() => console.log("The promise is either resolved or rejected."));
