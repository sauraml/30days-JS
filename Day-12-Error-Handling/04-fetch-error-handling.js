// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch() . Log an appropriate error message to the console.

fetch("https://ureachable.in")
    .then((response) => response.json())
    .catch((error) => {
        console.error("Error:", error.message);
        console.error("Invalid URL entered");
    });

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
        console.error("Invalid URL entered");
    }
}

fetchData("https://ureachable.in");
