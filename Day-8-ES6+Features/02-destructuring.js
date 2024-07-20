// Activity 2: Destructuring

// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const nums = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
const [first, second] = nums;

console.log(`first: ${first}
second: ${second}`);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    year: 2016,
};

const { title, author } = book;

console.log(`${title} by ${author}`);
