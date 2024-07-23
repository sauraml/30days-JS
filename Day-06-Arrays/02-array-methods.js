// Activity 3: Array Methods (Intermediate)

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Original array:", myArr);

// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const mappedArr = myArr.map((num) => 2 * num);
console.log("Doubled array", mappedArr);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const filterArr = myArr.filter((num) => num % 2 === 0);
console.log("Even Number array", filterArr);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = myArr.reduce(
    (accumulator, currValue) => accumulator + currValue,
    0
);
console.log("Sum of array", sum);
