// Activity 1: Object Creation and Access
// • Task 1. Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    year: 2015,
};

console.log(book);

// • Task 2: Access and log the title and author properties of the book object.
console.log(`Title of book: ${book.title}`);
console.log(`Author of book: ${book.author}`);

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getTitleAndAuthor = function () {
    return `${book.title} by ${book.author}`;
};

console.log(book.getTitleAndAuthor());

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.setYear = function (newYear) {
    this.year = newYear;
};

book.setYear(2016);
console.log(book.year);

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function () {
    return `${this.title} ${this.year}`;
};

console.log(book.getTitleAndYear());

console.log(book);
