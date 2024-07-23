// Activity 3: Nested Objects

// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: "My Library",
    books: [
        {
            title: "Demon Slayer",
            author: "Koyoharu Gotouge",
            year: 2016,
        },
        {
            title: "Harrt Potter",
            author: "J K Rowling",
            year: 1997,
        },
        {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            year: 1979,
        },
    ],
};

console.log(library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Name of library:", library.name);

console.log("Titles of books in library:");
library.books.forEach((book) => console.log(book.title));
