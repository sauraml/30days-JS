// Activity 3: Spread and Rest Operators

// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const nums = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
console.log("Array nums:", nums);

const arr = [...nums, 52, 53, 54, 55];
console.log("Array arr:", arr);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
