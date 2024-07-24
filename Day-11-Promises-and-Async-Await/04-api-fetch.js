// Activity 4: Fetching Data from an API

// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function asyncFetch() {
    try {
        const response = await fetch();
        ("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

asyncFetch();
