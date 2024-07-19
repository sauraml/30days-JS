// Activity 5: Object Iteration

const book = {
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    year: 2016,
};

// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const allKeys = Object.keys(book);
const allValues = Object.values(book);

console.log("Keys:", allKeys);
console.log("Values:", allValues);
