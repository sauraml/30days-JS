// Activity 1 : Array Creation and Access
// • Task 1. Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// • Task 2: Access the first and last elements of the array and log them to the console.
const firstElement = arr[0];
const lastElement = arr[arr.length - 1];
console.log(`First element: ${firstElement}`);
console.log(`Last element: ${lastElement}`);

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6);
console.log("Array after pushing 6 to end of arr");
console.log(arr);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log("Array after poping last element from arr");
console.log(arr);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log("Array after using shift method to remove first element");
console.log(arr);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(10);
console.log(
    "Array after using unshift method to add number to beginning of arr"
);
console.log(arr);
