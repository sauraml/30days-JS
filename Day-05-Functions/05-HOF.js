// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function callMe(func, num) {
    for (let i = 0; i < num; i++) func();
}
const sayBye = () => console.log("Good Bye!");

callMe(sayBye, 5);
