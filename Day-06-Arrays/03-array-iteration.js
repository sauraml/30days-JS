// Activity 4: Array Iteration

const arr = [1, 2, 3, 4, 5];
console.log("Unmodified arr:", arr);

// • Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Using for loop");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Using forEach loop");
arr.forEach((num) => console.log(num));
